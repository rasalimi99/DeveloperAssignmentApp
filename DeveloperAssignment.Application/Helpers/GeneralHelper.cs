using DeveloperAssignment.Domain;
using Microsoft.AspNetCore.Mvc;

namespace DeveloperAssignment.Application
{
    public class GeneralHelper : ControllerBase
    {
        public ActionResult CustomError(string Type,string Message)
        {
            return Ok(new CustomErrorDTO { Type = Type, Message = Message});
        }
    }
}
