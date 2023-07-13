

addEventListener('DOMContentLoaded',()=>{
    const list=document.querySelector('#listUl')
    list.innerHTML=`<ul class="menu-links">
    <li class="nav-link active">
        <a href="index.html">
            <i class='bx bx-home-alt icon' ></i>
            <span class="text nav-text">Categorias</span>
        </a>
    </li>
    <li class="nav-link">
        <a href="../empleados/empleado.html">
            <i class='bx bx-pie-chart-alt icon' ></i>
            <span class="text nav-text">Empleados</span>
        </a>
    </li>
    <li class="nav-link">
        <a href="../clientes/cliente.html">
            <i class='bx bx-bar-chart-alt-2 icon' ></i>
            <span class="text nav-text">Clientes</span>
        </a>
    </li>
    <li class="nav-link">
        <a href="../productos/producto.html">
            <i class='bx bx-wallet icon' ></i>
            <span class="text nav-text">Productos</span>
        </a>
    </li>
</ul>`
})