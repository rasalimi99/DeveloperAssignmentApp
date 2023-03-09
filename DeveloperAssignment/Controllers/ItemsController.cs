using AutoMapper;
using DeveloperAssignment.Application;
using DeveloperAssignment.Domain;
using DeveloperAssignment.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DeveloperAssignment.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IGeneral general;
        private readonly IEntities entities;
        private GeneralHelper generalHelper;

        public ItemsController(
            ApplicationDbContext context,
            IMapper mapper,
            IGeneral general,
            IEntities entities
        )
        {
            this.context = context;
            this.mapper = mapper;
            this.general = general;
            this.entities = entities;
            generalHelper = new GeneralHelper();
        }



        /// <summary>
        /// method for fetching items the function return list of items, and paginate the list for lazy loadign 
        /// </summary>
        /// <param name="paginationDTO">Pass required params to filter the list of items</param>
        /// <returns>list of items</returns>
        [HttpGet]
        [Route("GetItems")]
        public async Task<ActionResult<List<ItemsDTO>>> GetItems(
            [FromQuery] PaginationDTO paginationDTO
        )
        {
            var itemsQueryable = context.Items.AsQueryable();
            await HttpContext.InsertParametersPaginationInHeader(itemsQueryable);

            var items = await itemsQueryable
                .Include(x => x.Categories)
                .OrderBy(x => x.ItemId)
                .Select(
                    x =>
                        new ItemsDTO
                        {
                            ItemId = x.ItemId,
                            Name = x.Name,
                            Cost = x.Cost,
                            CategoryId = x.Categories.CategoryId,
                            CategoryName = x.Categories.CategoryName,
                        }
                )
                .Paginate(paginationDTO)
                .ToListAsync();

            if (items == null)
                return NotFound();

            return items;
        }

        /// <summary>
        /// method for adding new item to the db
        /// </summary>
        /// <param name="addItemDTO">Pass the required params to the method for adding new item </param>
        /// <returns>return message</returns>
        [HttpPost]
        [Route("PostItem")]
        public async Task<ActionResult> PostItem([FromBody] AddItemDTO addItemDTO)
        {
            // checking for the item before inserting, if the item already exists with the same name and with same category then the item won't add
            var exists = await context.Items.AnyAsync(
                x => x.Name.Contains(addItemDTO.Name) && x.CategoryId == addItemDTO.CategoryId
            );

            // return result 
            if (exists)
                return generalHelper.CustomError(
                    general.Warning,
                    $"{entities.Item} " + general.DataExistsMessage
                );

            var item = mapper.Map<Items>(addItemDTO);
            context.Add(item);
            await context.SaveChangesAsync();

            return generalHelper.CustomError(general.Success, general.DataInserted);
        }

        /// <summary>
        /// Method for deleting the item from db
        /// </summary>
        /// <param name="id">Pass item id to this method for delete the item</param>
        /// <returns>return message</returns>
        [HttpDelete("{id:int}")]
        [Route("DeleteItem/{id}")]
        public async Task<ActionResult> DeleteItem(int id)
        {
            var exists = await context.Items.AnyAsync(x => x.ItemId == id);
            if (!exists)
                return NotFound();

            context.Remove(new Items() { ItemId = id });
            await context.SaveChangesAsync();

            return generalHelper.CustomError(general.Success, general.DataDelteted);
        }
    }
}
