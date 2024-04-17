import { createBrowserRouter} from "react-router-dom";

const routes = createBrowserRouter([

{
    path: "/",
    element: <PaginaInicial />
},

{
    path: "/cadastro-trilha",
    element: <PaginaCadastro />
},
{
    path: "/lista",
    element: <PaginaLista />
}


]
)

