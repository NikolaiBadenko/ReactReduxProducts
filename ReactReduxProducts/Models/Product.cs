using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactReduxProducts.Models
{
    public class Product
    {
        public string Name { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        public long Rating { get; set; }
        public Guid Id { get; set; }
    }
}
