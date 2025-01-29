import Home from '../components/Home';
import Guide from '../components/Guide';
import Example from '../components/Example';
import ApiReference from '../components/ApiReference';

const routes = [
    { path: '/', element: Home },
    { path: '/guide', element: Guide },
    { path: '/example', element: Example },
    { path: '/api-reference', element: ApiReference }
];

export default routes;