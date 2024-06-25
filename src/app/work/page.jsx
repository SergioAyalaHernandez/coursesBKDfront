const Work = () => {
    return (
        <div className="p-6 bg-primary">
            <h2 className="text-xl font-bold text-accent mb-6">Estrategias y Tecnologías</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-primary shadow-md rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b-2 border-accent bg-accent text-left">Estrategias</th>
                            <th className="px-4 py-2 border-b-2 border-accent bg-accent text-left">Procesos</th>
                            <th className="px-4 py-2 border-b-2 border-accent bg-accent text-left">Tecnologías</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-200">Crecer la capacidad de almacenamiento de datos</td>
                            <td className="px-4 py-2 border-b border-gray-200">Implementar nuevas conexiones a nuevas bases de datos</td>
                            <td className="px-4 py-2 border-b border-gray-200">Mongodb</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-200">Implementar computación en la nube con AWS</td>
                            <td className="px-4 py-2 border-b border-gray-200">Establecer balanceadores de acuerdo a la necesidad de la aplicación</td>
                            <td className="px-4 py-2 border-b border-gray-200">AWS</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-200">Registrar comportamiento de los usuarios frente a la aplicación</td>
                            <td className="px-4 py-2 border-b border-gray-200">Crear una capa de microservicios para guardar en DB datos de las interacciones en la plataforma</td>
                            <td className="px-4 py-2 border-b border-gray-200">Java / Angular / RabbitMQ</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-200">Sistema de calificación de las clases por parte de los usuarios</td>
                            <td className="px-4 py-2 border-b border-gray-200">Guardar en base de datos la calificación de los usuarios</td>
                            <td className="px-4 py-2 border-b border-gray-200">MongoDB / Java / Angular</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Análisis de las calificaciones</td>
                            <td className="px-4 py-2">Analizar la data de manera visual, para realizar ajustes a los cursos o nuevas implementaciones</td>
                            <td className="px-4 py-2">Python / Pandas</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Work
