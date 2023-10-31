import { CardWide } from '../CardWide';
import { testimonials } from '../../data/blog-posts';

const CardSalesforce = () => {
  return (
        <section className='case-sc'>
        <div className='container'>
        <div className='case-content'>
        <div className='section-head flex items-end'>
            <div className='sc-head-2'>
              <h4 className='title title-lg'>Introducción a Salesforce</h4>
              <p className='text text-base'>Salesforce es una de las plataformas líderes en el mundo de la gestión de relaciones con el cliente (CRM, por sus siglas en inglés). Esta potente herramienta se ha convertido en una referencia para empresas de todos los tamaños, desde startups hasta grandes corporaciones, que buscan optimizar sus operaciones comerciales y mejorar la relación con sus clientes.<br></br>

                En esencia, Salesforce es un ecosistema que proporciona una amplia gama de soluciones diseñadas para ayudar a las empresas a gestionar de manera efectiva sus ventas, marketing, servicio al cliente y otras interacciones comerciales. Permite a las organizaciones centralizar y organizar datos clave sobre sus clientes, lo que a su vez facilita la toma de decisiones informadas, la personalización de las interacciones con los clientes y la automatización de procesos comerciales.<br></br>

                Una de las características más destacadas de Salesforce es su versatilidad. Puede adaptarse a las necesidades específicas de diferentes industrias y empresas mediante la creación de soluciones personalizadas a través de la plataforma de desarrollo de Salesforce. Esto significa que las empresas pueden diseñar flujos de trabajo únicos, informes personalizados y aplicaciones específicas que se alineen perfectamente con sus objetivos comerciales.<br></br>

                Salesforce también ha evolucionado para incluir tecnologías avanzadas como la inteligencia artificial y el aprendizaje automático, lo que permite a las empresas aprovechar datos en tiempo real para ofrecer experiencias excepcionales a los clientes y tomar decisiones estratégicas más sólidas.</p>
            </div>
        </div>
        <div className='section-head flex items-end'>
            <div className='sc-head-2'>
              <h4 className='title title-lg'>¿Qué es CRM?</h4>
              <p className='text text-base'>CRM son las siglas de Customer Relationship Management, que en español significa "Gestión de la Relación con el Cliente". Se refiere a un enfoque empresarial y a un conjunto de prácticas, estrategias y tecnologías diseñadas para gestionar y mejorar las interacciones y relaciones con los clientes.

            Un sistema de CRM es una herramienta que ayuda a las empresas a organizar, automatizar y rastrear las interacciones con los clientes a lo largo de su ciclo de vida. Esto incluye la captura de datos de contacto, el seguimiento de las comunicaciones, la gestión de ventas, la atención al cliente y la creación de perfiles de clientes. El objetivo principal de un sistema CRM es mejorar la satisfacción del cliente y fomentar la lealtad, lo que a su vez puede conducir a un aumento de las ventas y la rentabilidad.</p>
            
            </div>
        </div>
        <div className='section-head flex items-end justify-between'>
            <div className='sc-head-l'>
              <h4 className='title title-lg'>Experiencias Salesforce</h4>   
            </div>
        </div>
            <CardWide blogItemData={testimonials[2]} /><br></br>
            <CardWide blogItemData={testimonials[3]} /><br></br>
            <CardWide blogItemData={testimonials[4]} /><br></br>
            <CardWide blogItemData={testimonials[5]} /><br></br>
            <CardWide blogItemData={testimonials[6]} /><br></br>
            <CardWide blogItemData={testimonials[7]} /><br></br>
            <CardWide blogItemData={testimonials[8]} /><br></br>
            <CardWide blogItemData={testimonials[9]} /><br></br>
        </div>
        </div>
    </section>
  );
};

export default CardSalesforce;