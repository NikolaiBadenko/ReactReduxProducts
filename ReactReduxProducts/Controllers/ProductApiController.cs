using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using ReactReduxProducts.Models;
using System.Linq;

namespace ReactReduxProducts.Controllers
{
    [Route("api/[controller]")]
    public class ProductApiController
    {
        #region Properties
        private IMemoryCache _cache;

        private readonly string productListCacheKey = "ProductListCacheKey";
        #endregion


        public ProductApiController(IMemoryCache memoryCache)
        {
            _cache = memoryCache;
        }

        #region Controller actions
        [HttpGet("[action]")]
        public List<Product> GetAllProductsList()
        {
            return this.GetProductListFromCache();
        }

        [HttpGet("[action]/{id}")]
        public Product GetProductById(string id)
        {
            var productList = this.GetProductListFromCache();
            var product = productList.Where(pr => pr.Id == new Guid(id)).FirstOrDefault();
            return product;
        }

        [HttpPost("[action]")]
        public void AddOrUpdateProduct(Product product)
        {
            var productList = this.GetProductListFromCache();
            var existingProduct = productList.Where(pr => pr.Id == product.Id).FirstOrDefault();

            if (existingProduct != null)
            {
                // Update existing product
                existingProduct = product;
            }
            else
            {
                // Add new product
                product.Id = Guid.NewGuid();
                productList.Add(product);
            }
            this.SetProductListToCache(productList);
        }

        public class IdModel
        {
            public Guid id;
        }

        [HttpDelete("[action]")]
        public void DeleteProduct([FromBody()]IdModel idModel)
        {
            var productList = this.GetProductListFromCache();
            var existingProduct = productList.Where(pr => pr.Id == idModel.id).FirstOrDefault();

            if (existingProduct != null)
            {
                productList.Remove(existingProduct);
            }
            else
            {
                //TODO throw error if needed
            }
            this.SetProductListToCache(productList);
        }
        #endregion

        #region Helpers
        private List<Product> GetProductListFromCache()
        {
            List<Product> listProducts;
            if (!_cache.TryGetValue(productListCacheKey, out listProducts))
            {
                // Key not in cache, so get data
                listProducts = this.GetDefaultProductList();
                // Set cache options
                var cacheEntryOptions = new MemoryCacheEntryOptions()
                    // Keep in cache for this time, reset time if accessed
                    .SetSlidingExpiration(TimeSpan.FromSeconds(3600));

                // Save data in cache.
                _cache.Set(productListCacheKey, listProducts, cacheEntryOptions);
            }
            return listProducts;
        }

        private void SetProductListToCache(List<Product> listProducts)
        {
            var cacheEntryOptions = new MemoryCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromSeconds(3600));
            _cache.Set(productListCacheKey, listProducts, cacheEntryOptions);
        }

        private List<Product> GetDefaultProductList()
        {
            var productlist = new List<Product>()
            {
                new Product()
                {
                    Description = "Mind what no by kept. Celebrated no he decisively thoroughly. Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.",
                    Id = Guid.NewGuid(),
                    Name = "Super Product",
                    Price = 100500,
                    Rating = 10,
                },
                new Product()
                {
                    Description = "An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.",
                    Id = Guid.NewGuid(),
                    Name = "Mega Product",
                    Price = 300.1,
                    Rating = 5,
                }
            };
            return productlist;
        }
        #endregion
    }
}
