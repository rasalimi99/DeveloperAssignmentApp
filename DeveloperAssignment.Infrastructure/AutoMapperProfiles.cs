using AutoMapper;
using DeveloperAssignment.Domain;

namespace DeveloperAssignment.Infrastructure
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<ItemsDTO, Items>().ReverseMap();
            CreateMap<AddItemDTO, Items>();
        }

    }
}
