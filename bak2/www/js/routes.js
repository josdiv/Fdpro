routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/startpage/',
    componentUrl: './pages/startpage.html',
  }, 
  {
    path: '/product-detail/',
    componentUrl: './pages/product-detail.html',
  }, 
  {
    path: '/my-cart/',
    componentUrl: './pages/my-cart.html',
  },
   {
    path: '/search/',
    componentUrl: './pages/search.html',
  }, 
  {
    path: '/categories/',
    componentUrl: './pages/categories.html',
  }, 
	
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
