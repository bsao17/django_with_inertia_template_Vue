import { InertiaLink } from "@inertiajs/inertia-react";

const Layout = ({children}) => (
  <main role="main">
     {children}
  </main>
)



export default page => <Layout>{page}</Layout>;