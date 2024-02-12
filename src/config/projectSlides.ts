export const projectsSlides = {
  portfolio: [
    { id: 'project1', alt: 'Screen1', url: '/public/portfolio/1.png' },
    { id: 'project1-2', alt: 'Screen2', url: '/public/portfolio/2.png' }
  ],
  shop: [
    {
      id: 'cart_dark',
      alt: 'cart_dark',
      url: '/public/shop/cart_dark.png'
    },
    {
      id: 'cart_light',
      alt: 'cart_light',
      url: '/public/shop/cart_light.png'
    },
    {
      id: 'cart_page_light',
      alt: 'cart_page_light',
      url: '/public/shop/cart_page_light.png'
    },
    {
      id: 'catalog_dark',
      alt: 'catalog_dark',
      url: '/public/shop/catalog_dark.png'
    },
    {
      id: 'categories_dark',
      alt: 'categories_dark',
      url: '/public/shop/categories_dark.png'
    },
    {
      id: 'categories_light',
      alt: 'categories_light',
      url: '/public/shop/categories_light.png'
    },
    {
      id: 'collections_dark',
      alt: 'collections_dark',
      url: '/public/shop/collections_dark.png'
    },

    {
      id: 'product_dark',
      alt: 'product_dark',
      url: '/public/shop/product_dark.png'
    },
    {
      id: 'product_light',
      alt: 'product_light',
      url: '/public/shop/product_light.png'
    },
    {
      id: 'strapi_comments',
      alt: 'strapi_comments',
      url: '/public/shop/strapi_comments.png'
    },
    {
      id: 'strapi_products',
      alt: 'strapi_products',
      url: '/public/shop/strapi_products.png'
    }
  ],
  nest_auth: [
    {
      id: 'nest_auth',
      alt: 'nest_auth',
      url: '/public/nest_auth/nest_auth.png'
    }
  ]
}
export type ProjectSlideType = (typeof projectsSlides)['portfolio']
