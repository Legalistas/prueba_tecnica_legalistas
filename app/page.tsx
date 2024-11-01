import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">
          Legalistas - Prueba Técnica Frontend
        </h1>
      </header>

      <div className="flex flex-col md:flex-row flex-grow">
        <nav className="bg-gray-200 p-4 md:w-64">
          <h2 className="text-lg font-semibold mb-4">Instrucciones</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Implementa un layout responsive usando Flexbox</li>
            <li>Crea un grid de tarjetas estilo Vento</li>
            <li>Configura e implementa NextAuth para autenticación</li>
            <li>Asegúrate de que el diseño sea completamente responsive</li>
            <li>Utiliza TypeScript para el desarrollo</li>
          </ol>
        </nav>

        <main className="flex-grow p-4">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              1. Layout Responsive con Flexbox
            </h2>
            <p>
              Crea un layout responsive usando Flexbox. Asegúrate de que el
              diseño se ajuste a diferentes tamaños de pantalla.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Grid Estilo Vento</h2>
            <p className="mb-4">
              Implementa un grid de tarjetas similar al siguiente ejemplo:
            </p>
            <div className="p-4 mb-4">
              {/* Espacio para la imagen de ejemplo del estilo Vento */}
              <Image
                src="/vento.webp"
                alt="Ejemplo de grid estilo Vento"
                width={600}
                height={400}
              />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              3. Implementación de NextAuth
            </h2>
            <p className="mb-4">
              Configura NextAuth y crea un componente de autenticación como el
              siguiente:
            </p>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div>
                <p className="mb-2">Bienvenido</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Cerrar sesión
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Legalistas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
