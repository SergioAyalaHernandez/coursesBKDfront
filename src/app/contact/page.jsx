const Contact = () => {
    return (
        <div className="p-6 bg-primary-100">
            <section className="mb-6">
                <h2 className="text-xl font-bold text-accent">Contacto</h2>
                <p className="mt-2 text-white-700">
                    Numero de nequi para las inversiones
                     <a href="mailto:contacto@nuestraeducacion.com" className="text-accent underline"> soporte@coursesBKD.com</a>
                      o llamarnos al <span className="text-accent">+324 559 65 21</span>.
                </p>
            </section>
            <section>
            (
        <div className="p-6 bg-primary-100">
            <h2 className="text-xl font-bold text-accent mb-6">Detalles de Inversiones</h2>
            <div className="overflow-x-auto">
            <tr>
                            <td className="px-4 py-2 border-b border-gray-200">Plan de acción a 1 año, retorno de la inversión sobre el año</td>
                        </tr>
                <table className="min-w-full bg-primary shadow-md rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b-2 border-gray-200 bg-accent text-left">Descripción</th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 bg-accent text-left">Acciones</th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 bg-accent text-left">Valor (en millones)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-200">49% de acciones</td>
                            <td className="px-4 py-2 border-b border-gray-200">1000 acciones</td>
                            <td className="px-4 py-2 border-b border-gray-200">10 millones</td>
                        </tr>
                        
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-200"> Le fragrance jonalaú</td>
                            <td className="px-4 py-2 border-b border-gray-200">100 acciones</td>
                            <td className="px-4 py-2 border-b border-gray-200">100 millones</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-200"> Etéreo café</td>
                            <td className="px-4 py-2 border-b border-gray-200">160 acciones</td>
                            <td className="px-4 py-2 border-b border-gray-200">160 millones</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-200">Compuline</td>
                            <td className="px-4 py-2 border-b border-gray-200">150 acciones</td>
                            <td className="px-4 py-2 border-b border-gray-200">150 millones</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-200">roubike</td>
                            <td className="px-4 py-2 border-b border-gray-200">200 acciones</td>
                            <td className="px-4 py-2 border-b border-gray-200">200 millones</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b border-gray-200"> JEANS LRD</td>
                            <td className="px-4 py-2 border-b border-gray-200">50 acciones</td>
                            <td className="px-4 py-2 border-b border-gray-200">50 millones</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

                <h2 className="text-xl font-bold text-accent">Dirección</h2>
                <p className="mt-2 text-white-700">
                    Nuestra oficina está ubicada en:
                    <br />
                    Calle3 # 19 - 09 sur
                    <br />
                    Bogotá, 1101101
                    <br />
                    Colombia
                </p>
            </section>
            <section>
                <h2 className="text-xl font-bold text-accent">Horario de Atención</h2>
                <p className="mt-2 text-white-700">
                    Lunes a Viernes: 9:00 AM - 6:00 PM
                    <br />
                    Sábado: 10:00 AM - 2:00 PM
                    <br />
                    Domingo: Cerrado
                </p>
            </section>
        </div>
    )
}

export default Contact
