using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DeveloperAssignment.Domain
{
    public class Items
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ItemId { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; } = string.Empty;
        [Required]
        public decimal Cost { get; set; }
        [ForeignKey("LookupId")]
        public byte CategoryId { get; set; }
        public Categories Categories { get; set; }

    }
}
