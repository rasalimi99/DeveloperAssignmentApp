using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeveloperAssignment.Domain
{
    public class ItemsDTO
    {
        public long ItemId { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Cost { get; set; }
        public byte CategoryId { get; set; }
        public string CategoryName { get; set; } = string.Empty;

    }

    public class AddItemDTO
    {
        public string Name { get; set; } = string.Empty;
        public decimal Cost { get; set; }
        public byte CategoryId { get; set; }
    }
}

