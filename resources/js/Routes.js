import Primary from './components/Primary';
import Cart from './components/cart/Cart';
import NotFound from './components/NotFound';

export const routes = [
    {
        path: '/',
        name: 'primary',
        component: Primary
    },
    {
        path: '/cart',
        name: "cart",
        component: Cart
    },
    {
        path: '/*',
        name: "notFound",
        component: NotFound
    }
]