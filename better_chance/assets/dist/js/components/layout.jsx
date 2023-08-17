import { InertiaLink } from "@inertiajs/inertia-react";

const Layout = ({children}) => (
  <main role="main">
     {children}
  </main>
)



export default Layout => <Layout>{page}</Layout>;