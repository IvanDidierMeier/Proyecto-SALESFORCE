import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardArticles } from '../components';
import Container from '../layout/Container';
import HeaderSection from '../layout/HeaderSection';
import { articlesCards } from '../data/blog-posts';

const Articles = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  },);
  const article = articlesCards.find((blog) => blog.id === parseInt(id));
  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <>
      <HeaderSection />
      <main>
        <Container>
          <section className='featured-sc bg-white'>
            <CardArticles blogItemData={article} />
          </section>
          <div className='section-head flex'>
            <div className='sc-head-r'>
              <h4 className='title title-lg'>Estrategias para mejorarla:</h4>
              <div>
                <p className='text text-base'>
                {article.id === 1 && (
                    
                   
  <div>
     <h4 className='title title-lg'>¿Cómo puedo mejorar mi autoestima?</h4>
                    <p>Deja de machacarte. No somos perfectos; debemos aceptar las cosas que no hacemos también y aprender de ello y valorar las cosas que sabemos hacer bien.</p>
                    
                    <p>Empieza a pensar en positivo. Cambia tus pensamientos, el “no puedo” por “voy a tener éxito”. Si nos damos cuenta de que tenemos muchas cosas a valorar, es más fácil que salgamos del bucle negativo.</p>
                    
                    <p>Ponte metas realistas y que puedas cumplir. Metas a las cuales sea relativamente fácil llegar. Poco a poco las podemos aumentar. Si fracasamos, aprenderemos de ello sin culparnos de nuestros errores.</p>
                    
                    <p>No te compares. Cada persona vive en su mundo; concéntrate en ti y en tu vida. Envidiando e idealizando la vida de los demás, lo único que conseguirás es sentirte desgraciado.</p>
                    
                    <p>Has críticas constructivas acerca de ti misma. Que todo lo que te digas sirva para mejorar, no para estancarte y culpabilizarte.</p>
                    
                    <p>Regálate tiempo. Realiza actividades que te hagan feliz. Es la mejor manera de encontrarte contigo misma y desarrollar tus habilidades.</p>
                    
                    <p>Supera tus lastres. Hay personas que viven arrastrando mochilas llenas de peso, relaciones que no aportan nada, hábitos que no les gustan; es preciso tomar cierto control sobre la situación y tratar de cambiarlas.</p>
                    
                    <h4><strong>Créditos: Martin Fernandez, Lic. en Psicología</strong></h4>
                  
<h4 className='title title-lg'>La capacidad de tener aprecio o consideración de uno mismo
</h4>
<h4><strong>👁️Resalta tus logros</strong></h4>
    <p>Las personas que están en tu entorno deben felicitarte por todas tus acciones positivas. De esa manera, te ayudan a reconocer que vas por un buen camino, fortalecen tu confianza y te motivan a seguir encontrando nuevas habilidades.</p>
    <p>Además, esto hace que te sientas bien contigo mismo y alcanza un estado de bienestar porque te das cuenta de que las demás personas te valoran.</p>
    
    <h4><strong>👁️Incentiva tus talentos</strong></h4>
    <p>Todos tenemos nuestros propios intereses y es indispensable respetarlos. Por esa razón, debes manifestarte que tienes todas las capacidades para rendir en lo que te gusta y que siempre vas a encontrar todo el apoyo que necesites.</p>
    <p>De tal modo, podrás asistir a espacios que te hagan feliz, esto hará que te esfuerces por potenciar tus habilidades y encontrarás nuevos desafíos que te motiven.</p>
    
    <h4><strong>👁️Evita las comparaciones</strong></h4>
    <p>Cada persona tiene un desarrollo y un estilo de vida diferente. Por lo tanto, nadie debe intentar ser igual al otro para lograr sentirse bien.</p>
    <p>Las comparaciones solo logran que llegues a pensar que estás fracasando si no logras los mismos objetivos que los otros. A raíz de ello, es indispensable evitar esa conducta y reconocer de buena manera el proceso de evolución que has logrado tener con el paso del tiempo.</p>
    
    <h4><strong>👁️No juzgues</strong></h4>
    <p>Al juzgar a los demás se atenta contra la autoestima de esas personas. Debido a ello, puedes quedar con la idea de que en algún momento alguien podría tener el derecho de perjudicar tu propio estado de ánimo.</p>
    <p>Asimismo, al juzgar alguna conducta se afecta la autoestima porque en el futuro comienzas a cohibirte para evitar burlas. De esa manera, vives con miedo constante que te puede causar frustración.</p>
    
    <h3>Referencias: </h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4HiluCeOgwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h4><strong>Créditos: Mercedes Hidalgo</strong></h4>
    <h4 className='title title-lg'>¿Víctima o protagonista?</h4>
    <p>¡Si no dejas de ser una víctima no podrás cambiar tu realidad!</p>
    
    <p>La posición de víctima puede ser muy cómoda y libre de responsabilidad, pero te quita todo el poder sobre tu vida, no pudiendo cambiar tu situación. Si no estás conforme con tu vida es por todas las decisiones que has tomado hasta ahora y esa es tu RESPONSABILIDAD, y ser responsable no significa ser culpable, es responder con habilidad.</p>
    
    <h4><strong>¿Cómo piensa una víctima?</strong></h4>
    <ul>
      <li>Dice que son las circunstancias las que deben cambiar y se queda esperando.</li>
      <li>No se interroga a sí mismo, solo pregunta ¿por qué sucede esto?</li>
      <li>Vive resentido por aquello que pasó y no puede cambiarse.</li>
      <li>El mundo conspira contra ellos.</li>
      <li>Insisten con que los demás deben actuar diferente.</li>
      <li>Encuentran una “justificación” (excusa) para todo.</li>
    </ul>

    <h4><strong>¿Cómo piensa un Responsable?</strong></h4>
    <ul>
      <li>Responde ante los desafíos de las distintas circunstancias.</li>
      <li>Ve los errores como oportunidad de aprendizaje.</li>
      <li>No culpa las circunstancias.</li>
      <li>Sabe que es el actor y creador de su propia vida.</li>
      <li>Su insatisfacción lo lleva a la acción.</li>
      <li>Cuando algo lo limita se pregunta qué hacer o cómo cambiarlo.</li>
    </ul>
    
    <p>¡Es hora de dejar de ser una víctima y empezar a ser el protagonista de tu vida! Tienes el poder para tomar el control y escribir tu propia historia. Los desafíos que has enfrentado te prepararon para este momento. ¡Confía en ti mismo y ve a por tus sueños! Eres el héroe de tu propia historia y cuentas con todas las herramientas para salir adelante.</p>
    
    <h3>Referencias:</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/tpabjkN2zhI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    <h4><strong>Créditos: Mercedes Hidalgo</strong></h4>
    <h4 className='title title-lg'>Modelos Mentales</h4>
    <p>Los "modelos mentales" se refieren a las representaciones internas y subjetivas que las personas tienen de la realidad. Son estructuras cognitivas que utilizamos para comprender, explicar y predecir el mundo que nos rodea. Estos modelos influyen en cómo percibimos y respondemos a situaciones, así como en la toma de decisiones.</p>
    
    <p>Aquí hay algunos puntos clave sobre los modelos mentales:</p>
    <ul>
      <li>Construcción de la realidad: Los modelos mentales son como mapas internos que usamos para navegar por el mundo. Ayudan a simplificar la complejidad de la realidad y a darle sentido.</li>
      <li>Influencia en el pensamiento: Nuestros modelos mentales influyen en cómo pensamos y en nuestras creencias. Pueden ser conscientes o inconscientes.</li>
      <li>Resistencia al cambio: A menudo, las personas se aferran a sus modelos mentales existentes, incluso cuando se enfrentan a información que los desafía. Esto puede generar resistencia al cambio.</li>
      <li>Variedad de modelos: Cada persona tiene una serie de modelos mentales que abarcan diversas áreas de la vida, desde cómo funcionan las relaciones interpersonales hasta cómo funciona el mundo empresarial.</li>
      <li>Aprendizaje y adaptación: La capacidad de actualizar y ajustar los modelos mentales es fundamental para el aprendizaje y la adaptación. A medida que adquirimos nuevas experiencias y conocimientos, nuestros modelos mentales pueden evolucionar.</li>
      <li>Comunicación: Los modelos mentales también afectan la comunicación. Cuando interactuamos con otros, a menudo asumimos que compartimos una comprensión común de la realidad, pero esto puede no ser así debido a diferencias en los modelos mentales.</li>
      <li>Resolución de problemas: Los modelos mentales pueden ayudar en la resolución de problemas al proporcionar marcos conceptuales para abordar desafíos.</li>
      <li>Diversidad de perspectivas: Reconocer que las personas tienen diferentes modelos mentales puede fomentar la comprensión y la empatía hacia los puntos de vista de los demás.</li>
    </ul>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/PE18Dnyp0vo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <h4><strong>Créditos: Fundación Pescar</strong></h4>
  </div>
)}
                  {article.id === 2 && (
  <div>
     <h4 className='title title-lg'>Supera tus miedos</h4>
    <p>Escúchate con atención para darte cuenta de cuando te estás poniendo excusas y en realidad son tus miedos los que están hablando. No niegues lo que es, no pasa nada. Todos tenemos miedo. Reconocerlo y aceptarlo para poder transformarlo.</p>
    
    <p>Asume que los resultados de tu vida dependen de lo que decidas hacer para alcanzarlos. Ni de los demás, ni de la suerte, ni de la edad, ni de nada más. Nada te hace sentir más poderosa que darte cuenta de que eres tú quien lleva las riendas de tu vida.</p>
    
    <p>Ponles nombre a tus miedos. Diferencia si lo que sientes es miedo a la incertidumbre, al cambio, a equivocarte, a arrepentirte, al fracaso, al qué dirán, a la soledad o a perder algo.</p>
    
    <p>Si eres humano, cometerás errores. No hay otra opción. Así que tú verás si vivirlos como una tragedia y una prueba de lo que vales o como parte del cambio, una prueba de que estás viva y la gran fuente de tus aprendizajes.</p>
    
    <p>Visualiza: Imagínate haciendo eso que quieres conseguir, aún con miedo. Por ejemplo, caminando con seguridad, acercándote a tu jefe y pidiéndole ese aumento con confianza y tranquilidad.</p>
    
    <p>Sal de tu zona de confort un poquito cada día. La mejor manera de superar tus miedos, y a veces la única, es acostumbrarte a dar un primer paso y a tomar pequeñas decisiones cotidianas que se acerquen a eso que quieres.</p>
    
    <p>Recuerda experiencias de logro, de superación personal, momentos en los que te sentiste capaz, en los que te caíste y te levantaste, en los que pensaste que no ibas a superar esa situación y lo hiciste ¡y lo empoderada que te sentiste después!</p>
    
    <p>Sigue adelante siempre. Si te caes, levántate y camina. No renuncies, no te pares, da otro paso, continúa. Te aseguro que si siempre sigues adelante, llegarás a donde quieres llegar. La paciencia, la confianza y la perseverancia son grandes compañeras.</p>
    
    <h3>Referencias: </h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZXKgYVIC0rA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/w-ioxUD4jr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<h4><strong>Créditos: Mercedes Hidalgo</strong></h4>
    <h4 className='title title-lg'>Mis conversaciones limitantes</h4>
    <p>Nuestras conversaciones crean nuestra realidad interna y externa, abriendo o cerrando posibilidades.</p>
    
    <p>Ejemplo de conversaciones limitantes: “Debo levantarme temprano porque tengo que beber agua, porque debo estar sana”. ¿Qué pasaría si cambiaras el "debo" y "tengo" por "quiero"? Estas son algunas de las palabras más criticadas que limitan nuestras conversaciones y posibilidades:</p>
    
    <ul>
      <li>debo hacer…</li>
      <li>no sé si podré…</li>
      <li>capaz puedo…</li>
      <li>tengo que …</li>
      <li>podría ser…</li>
      <li>espero que …</li>
      <li>te quiero, pero…</li>
    </ul>
    
    <p>Estas palabras presuponen que algo externo controla tu vida, o dejan la posibilidad de falla o incapacidad personal. Sustituye lo condicional por lo presente; por ejemplo “Me gustaría agradecerte por venir”, mejor di “agradezco tu presencia”.</p>
    
    <p>Ahora que ya eres consciente de esto, elige un día y presta atención a tus conversaciones y ten bien presente tus palabras.</p>
    
    <p>Reflexiona sobre cuántas veces en un día utilizamos estas palabras en una conversación y qué pasaría si tu conversar fuera más poderoso.</p>
    
    <p>“A veces la más grande aventura es simplemente una conversación”.</p>
    
    <h3>Referencias:</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0YNZK3A8JYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/OpLCsgr1dnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <h4><strong>Créditos: Mercedes Hidalgo</strong></h4>
  
  <h4 className='title title-lg'>Mi diálogo interno</h4>
    <p>El diálogo interno se refiere a los pensamientos y conversaciones que una persona tiene consigo misma en su mente. Estos pensamientos pueden ser conscientes o inconscientes y suelen ser una parte normal de la experiencia humana. El diálogo interno puede abordar una variedad de temas, desde la toma de decisiones y la resolución de problemas hasta la reflexión sobre experiencias pasadas y la autoevaluación.</p>
    
    <p>Es importante que prestes atención a tu diálogo interno ya que tiene gran influencia en la conducta. Te proponemos respondas a las siguientes preguntas:</p>
    <ul>
      <li>¿En qué situaciones me hablo?</li>
      <li>¿Me habló dándome ánimo o me criticó?</li>
      <li>¿Con mi diálogo interno me ayudó a mejorar o me pongo limitaciones?</li>
      <li>¿Qué tendría que hacer para mejorar mi diálogo interno?</li>
    </ul>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eVCy3XEOS1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <h4><strong>Créditos: Mercedes Hidalgo</strong></h4>
    <h4 className='title title-lg'>Ventana de Johari (Conocerse a través de los demás)</h4>
    <p>La ventana de Johari es una herramienta para organizar y hacer un inventario de características personales de perspectivas interiores y exteriores. La ventana está representada por un cuadrado dividido en 4 cuadrantes. El eje horizontal de la ventana describe los conocimientos de un individuo mientras que el eje vertical describe los conocimientos del grupo. Estas informaciones pueden ser conocidas o desconocidas.</p>
    
    <p>Zona pública: Esta zona representa toda la información que una persona comparte libremente con quienes la rodean.</p>
    <p>Zona ciega: Esta zona representa la información que una persona desconoce sobre sí misma pero que es conocida por quienes la rodean.</p>
    <p>Zona privada o escondida: Esta zona representa la información que una persona conoce sobre sí misma pero que los otros desconocen.</p>
    <p>Zona desconocida: Esta zona representa lo que la persona ignora sobre sí misma, lo cual también es ignorado por las demás personas.</p>

    <p>Las personas que tienen poca experiencia de vida y que no creen en sí mismas, suelen tener una gran zona desconocida. La exploración de esta zona permite aprovechar nuevas competencias, capacidades y talentos poco explotados.</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/LBpT4V_RyJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <h4><strong>Créditos: Fundación Pescar</strong></h4>
  </div>
)}
{article.id === 3 && (
  <div>
    <h4 className='title title-lg'>Inteligencia emocional</h4>
    <p>Durante la década de los 90 la inteligencia emocional fue considerada prácticamente un superpoder. Se suponía que la gente que la poseía no sólo era capaz de identificar estados emocionales, sino que también podían conectar con la gente, eliminar cualquier atisbo de estrés, y descifrar el lenguaje corporal de aquellos que les rodeaban. ¿Pero es realmente tan maravillosa la inteligencia emocional? ¿De verdad es mucho más importante que el cociente intelectual? Y si lo es, ¿cuál es la manera más sencilla de desarrollarla? Entonces la inteligencia emocional puede explicarse en función de cómo gestionas tus emociones y las de los demás.</p>

    <p>Autoconciencia: La habilidad de reconocer e identificar las emociones en ti mismo, así como su origen.</p>
    <p>Autocontrol: Tu capacidad de controlar los impulsos y retrasar la recompensa inmediata.</p>
    <p>Empatía: La habilidad para conectar con las emociones y motivos de los demás.</p>
    <p>Habilidades sociales: La capacidad de relacionarse satisfactoriamente con los demás, gestionar conflictos, comunicarte claramente e influir sobre las personas.</p>

    <p>Otros autores también añaden la motivación a tu eje emocional. Pero ¿qué es más importante? ¿Saber gestionar las emociones o ser un genio de las matemáticas?</p>
  
    <h3>Referencias: </h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TDn-5sylKFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <h4><strong>Créditos: Fundación Pescar</strong></h4>
    <h4 className='title title-lg'>Secuestro Emocional</h4>
    <p>El "secuestro emocional" es un término que se utiliza para describir una situación en la que las emociones intensas o abrumadoras pueden tomar el control de una persona, a menudo de manera repentina y sin previo aviso. Durante un secuestro emocional, la persona puede sentir una pérdida momentánea de su capacidad para pensar con claridad, tomar decisiones racionales o controlar sus reacciones emocionales.</p>

    <p>Este concepto se ha popularizado en el contexto de la inteligencia emocional y se asocia comúnmente con la psicología y la terapia emocional. Un secuestro emocional puede ser desencadenado por una variedad de situaciones estresantes o desafiantes, como conflictos interpersonales, situaciones de alto estrés o traumas emocionales.</p>

    <p>Es importante señalar que experimentar un secuestro emocional ocasionalmente es una respuesta humana normal ante situaciones intensas. Sin embargo, si los secuestros emocionales son frecuentes o interfieren significativamente en la vida de una persona, puede ser beneficioso buscar apoyo emocional o asesoramiento para aprender estrategias de manejo emocional y reducir su impacto.</p>
  
    <h3>Referencias: </h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/w10NC-yMn3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <h4><strong>Créditos: Fundación Pescar</strong></h4>

    <h4 className='title title-lg'>5 Pasos para mejorar tu inteligencia emocional</h4>
    <p>Estos pasos fueron extraídos de un estudio realizado en 2009 a un grupo de voluntarios para ver si se podía mejorar la inteligencia emocional. En este estudio los participantes recibieron una serie de clases teóricas con ejercicios. Para finalmente comprobar que esta fue notablemente en incremento a mediano y corto plazo.</p>

    <p>1. Detecta la emoción que hay detrás de tus actos: Cuando algo te haga actuar y sentirte de una determinada forma, párate un segundo, reflexiona sobre la emoción que hay detrás, y encuentra su origen.</p>
    <p>2. Amplía tu vocabulario emocional: Existen 5 emociones principales ALEGRÍA, TRISTEZA, ENOJO, MIEDO y DISGUSTO a partir de ellas se crean todas las demás emociones. Tener un vocabulario rico con el que describir exactamente tus sentimientos es muy importante. No dominar el lenguaje limita el conocimiento de lo que estás experimentando creando la sensación de que no sabes lo que pasa.</p>
    <p>3. No te dejes engañar por las apariencias emocionales: Muchas veces las emociones primarias desencadenan otras emociones, y eso nos lleva al error de creer que lo que realmente estamos sintiendo es la emoción secundaria.</p>
    <p>4. No juzgues la forma en que te sientes: Las emociones tienen la función de darte información sobre lo que está ocurriendo. Por lo que si pudieras reprimirlas estarías en total desconocimiento de cómo reaccionar. TRATA DE ENTENDERLAS PARA ASÍ PODER MANEJAR LA SITUACIÓN DE MANERA ASERTIVA.</p>
    <p>5. Expresa tus emociones de forma asertiva: Cuando ya sepas poner nombre e identificar tus emociones, podrás continuar para expresarlas sin efectos adversos, mediante la asertividad: “ME SIENTO X (EMOCIÓN) CUANDO HACES Y (CONDUCTA) EN LA SITUACIÓN Z”</p>
    
    <h3>Referencias: </h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Vu6xM229q9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <h4><strong>Créditos: Fundación Pescar</strong></h4>

  </div>
)}
{article.id === 4 && (
                    <section className='case-sc'>
                    <div className='container'>
                    <div className='case-content'>
                    <div className='section-head flex items-end'>

                    <div className='sc-head-2'>
                    <h4 className='title title-lg'>El Arte de la Productividad</h4>
                    <p className='text text-base'>La administración del tiempo es una habilidad esencial en la sociedad moderna, donde las demandas sobre nosotros son constantes y los recursos limitados. En un mundo en el que a menudo sentimos que las 24 horas del día no son suficientes, saber cómo utilizar ese tiempo sabiamente se convierte en un factor crítico para alcanzar el éxito y mantener un equilibrio en nuestra vida. La administración del tiempo no se trata simplemente de hacer más tareas en menos tiempo. Se trata de tomar el control de tu vida, establecer prioridades y utilizar tu tiempo de manera que se ajuste a tus metas y valores personales. Para lograr esto, es esencial definir y establecer prioridades claras</p>
                    <br />
                    <p className='text text-base'>En resumen, la administración del tiempo es una habilidad fundamental para la productividad y el bienestar en la vida moderna. Definir prioridades y establecer objetivos SMART te ayudará a aprovechar al máximo tu tiempo. La práctica constante y la aplicación de técnicas eficaces son clave para perfeccionar estas habilidades y lograr un equilibrio sostenible en tu vida.</p>
                    <h3>Referencias: </h3>
                
                    <br />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eS3RygA5ziU?si=ZYUULfsG1BTZLWRW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  
                    </div>
                    </div>
                    
                    <div className='sc-head-2'>
                    <h4 className='title title-lg'>Definir Prioridades: Clave para la Efectividad</h4>
                    <p className='text text-base'>Uno de los pilares fundamentales de una administración del tiempo efectiva es la capacidad de definir prioridades. No todas las tareas son igualmente importantes. Una herramienta útil en este sentido es el método de Eisenhower, que clasifica las tareas en cuatro categorías: importantes y urgentes, importantes pero no urgentes, urgentes pero no importantes, y ni importantes ni urgentes. El enfoque está en priorizar las tareas importantes pero no urgentes, ya que esta categoría es donde se puede lograr una planificación efectiva y prevenir crisis.</p>
                    </div>

                    <div className='sc-head-2'>
                    <h4 className='title title-lg'>La Práctica de la Administración del Tiempo</h4>
                    <p className='text text-base'>En la práctica, la administración del tiempo se basa en tomar decisiones conscientes y aplicar técnicas que te permitan utilizar tu tiempo de manera más efectiva.</p>           
                    <div className='sc-head-2'>
                    <h3>Aquí hay algunas estrategias y consejos:</h3>
                      <li><strong>Planificación Diaria:</strong> Comienza cada día con una lista de tareas específicas y priorízalas según su importancia y urgencia. Esto te ayudará a mantenerte enfocado en lo que realmente importa. </li>
                      <li><strong>Eliminación de Tareas No Productivas:</strong>Identifica tareas que consumen tiempo pero no aportan valor y busca formas de eliminarlas o delegarlas.</li>
                      <li><strong>Técnicas de Concentración:</strong>Utiliza técnicas como el enfoque Pomodoro, que divide el tiempo en bloques de trabajo concentrado seguidos de descansos, para maximizar tu concentración.</li>
                      <li><strong>Automatización y Delegación:</strong>Utiliza herramientas y delega tareas siempre que sea posible. La tecnología puede ser una aliada poderosa en la administración del tiempo.</li>
                      <li><strong>Revisión Constante:</strong>Evalúa regularmente tus objetivos y ajusta tu enfoque según sea necesario. Mantén la flexibilidad para adaptarte a los cambios en tu vida.</li>
                    </div>
                    </div>

                    <div className='sc-head-2'>
                    <h4 className='title title-lg'>Metodología de estudio</h4>
                    <p className='text text-base'>La metodología de estudio es la manera en que abordas tus tareas de aprendizaje. Es crucial para maximizar tu comprensión y retención de la información.</p>
                    <div className='sc-head-2'>
                    <h3>Aquí hay algunos consejos clave:</h3>
                      <li><strong>Planificación:</strong>  Antes de comenzar, establece un plan de estudio. Define tus metas y organiza tu tiempo. Esto te ayudará a mantenerte enfocado en lo que realmente necesitas aprender.  </li>
                      <li><strong>Ambiente de Estudio:</strong>Crea un espacio de estudio tranquilo y libre de distracciones. Asegúrate de contar con todas las herramientas y recursos necesarios.</li>
                      <li><strong>Apuntes Efectivos:</strong> Tomar buenos apuntes es esencial. Anota la información clave de manera clara y organizada. Esto te facilitará la revisión posterior. </li>
                      <li><strong>Métodos de Aprendizaje:</strong>Descubre tu estilo de aprendizaje. ¿Eres visual, auditivo o kinestésico? Conocer tu estilo te permitirá adaptar tus métodos de estudio. Test de qué tipo de estudiante somos? </li>
                    </div>
                    </div>

                    <div className='sc-head-2'>
                    <h4 className='title title-lg'>Test de qué tipo de estudiante somos?</h4>
                    <p className='text text-base'>La técnica Pomodoro es una estrategia de gestión del tiempo que se basa en trabajar en intervalos de tiempo específicos. Esta técnica te ayuda a mantener la concentración y evitar la fatiga mental.</p>
                    </div>

                    <div className='sc-head-2'>
                    <h4 className='title title-lg'>Técnica pomodoro</h4>
                    <p className='text text-base'>Uno de los pilares fundamentales de una administración del tiempo efectiva es la capacidad de definir prioridades. No todas las tareas son igualmente importantes. Una herramienta útil en este sentido es el método de Eisenhower, que clasifica las tareas en cuatro categorías: importantes y urgentes, importantes pero no urgentes, urgentes pero no importantes, y ni importantes ni urgentes. El enfoque está en priorizar las tareas importantes pero no urgentes, ya que esta categoría es donde se puede lograr una planificación efectiva y prevenir crisis.</p>
                    <div className='sc-head-2'>
                    <h3>Aquí te explicamos cómo funciona:</h3>
                      <li><strong>Establece un Objetivo:</strong> Elige una tarea que quieras completar.  </li>
                      <li><strong>Pomodoros :</strong> Tómate 5 minutos de descanso después de cada Pomodoro.</li>
                      <li><strong>Ciclo de Cuatro Pomodoros :</strong>Después de completar cuatro Pomodoros, toma un descanso más largo de 15-30 minutos. </li>
                      <br />
                      <h3>Referencias: </h3>
                      <br />
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/IUXNiDJJ_9s?si=YFUlrPAeK1WgBY6G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      <br />
                      <br />
                    </div>
                    </div>

                    <div className='sc-head-2'>
                    <h4 className='title title-lg'>Técnica GTD (Getting Things Done) </h4>
                    <p className='text text-base'>La técnica GTD es una metodología de gestión de tareas que se centra en mantener una mente libre de preocupaciones. La técnica GTD es especialmente útil para la gestión de proyectos y tareas a largo plazo. En resumen, estas metodologías y técnicas pueden ayudarte a estudiar de manera más efectiva y gestionar tu tiempo de manera más eficiente. Experimenta con ellas y descubre cuál se adapta mejor a tu estilo y necesidades. Recuerda que la clave para el éxito en el estudio está en la organización y la constancia. ¡Aprovecha al máximo tu potencial como estudiante!</p>
                    </div>

                    <div className='sc-head-2'>
                    <h4 className='title title-lg'>Definir Prioridades: Clave para la Efectividad</h4>
                    <p className='text text-base'>Uno de los pilares fundamentales de una administración del tiempo efectiva es la capacidad de definir prioridades. No todas las tareas son igualmente importantes. Una herramienta útil en este sentido es el método de Eisenhower, que clasifica las tareas en cuatro categorías: importantes y urgentes, importantes pero no urgentes, urgentes pero no importantes, y ni importantes ni urgentes. El enfoque está en priorizar las tareas importantes pero no urgentes, ya que esta categoría es donde se puede lograr una planificación efectiva y prevenir crisis.</p>
                    <div className='sc-head-2'>
                    <h3>Aquí te explicamos cómo funciona:</h3>

                      <li><strong>Captura: </strong> Anota todas las tareas y pensamientos en una lista.   Procesa: Decide qué hacer con cada elemento (hacer, posponer, delegar o eliminar).  </li>
                      <li><strong>Organiza: </strong>Clasifica las tareas en listas basadas en su contexto o prioridad. Revisa: Revise tus listas de forma regular.</li>
                      <li><strong> Ejecuta: </strong>Realiza las tareas según lo planeado. </li>
                      
                    </div>
                    

                    </div>

                    </div>
            
                    </div>
                </section>
                  )}
                  {article.id === 6 && (
  <div>
    <h4 className='title title-lg'>¿Qué es la comunicación no verbal?</h4>
    <p>Cuando hablamos de comunicación no verbal nos referimos a todas aquellas formas de comunicación que no emplean la lengua como vehículo y sistema para expresarse. Es decir, todas aquellas vías de transmisión de un mensaje que no requieren de las palabras ni del lenguaje verbal.</p>
    
    <p>No debemos confundir la comunicación no verbal con la comunicación no oral, o sea, la que no pasa por la voz hablada. Uno puede escribir en un papel o emplear un lenguaje de señas (como el lenguaje de los sordomudos) y estar empleando la lengua pero a través de soportes o sistemas de representación diferentes.</p>

    <p>La comunicación no verbal tiene que ver con gestos, sonidos, movimientos y otros elementos paralingüísticos, o sea, que suelen acompañar al uso del lenguaje verbal para matizarlo y encauzarlo. Tanto es así que es posible transmitir no verbalmente un mensaje contrario a lo que se expresa mediante las palabras.</p>

    <p>Los animales también ejercen cierto tipo de comunicación no verbal. Únicamente el ser humano es capaz, en cambio, de un lenguaje verbal.</p>

    <h3>Elementos de la comunicación no verbal</h3>
    <p>La comunicación no verbal cumple con el circuito de la comunicación de cualquier tipo: tiene un emisor, un receptor, un mensaje, un canal y un cierto código (dado que no hay un lenguaje convencional al que acudir). Eso significa que los mensajes se elaboran a través de otros sentidos y empleando otras partes del cuerpo, como son:</p>
    <ul>
      <li>Emisor. Utiliza sus cejas, su sonrisa, su boca (para hacer muecas), sus ojos y la dirección en que mira, su postura corporal, su ceño, su distancia respecto al otro, cuando no su voz (ritmo y tono, nada más) o sus gestos manuales.</li>
      <li>Receptor. Quien recibe el mensaje usa principalmente su vista y su oído, aunque no recibe palabras, sino tonos y secuencias.</li>
    </ul>
    
    <p>En ese sentido, la comunicación no verbal es mucho más versátil que la hablada, dado que dispone de un conjunto más libre de sentidos y signos que elaborar e incluso puede incorporar elementos contextuales: señalar un objeto o una dirección, tomar un objeto, o realizar una mímica o imitación de una acción que desea transmitirse.</p>

    <h3>Cuando hablamos de lenguaje no verbal, nos referimos a:</h3>
    <ul>
      <li>Gestualidad. Movimientos de las manos, de las extremidades todas o desplazamientos de la cabeza, que pueden ser más o menos complejos y más o menos específicos, de acuerdo a la intención.</li>
      <li>Expresiones faciales. Existe en el ser humano cierto condicionamiento congénito que nos permite reconocer las expresiones faciales desde edades muy tempranas.</li>
      <li>Postura corporal. Dependiendo de cómo posicionemos el cuerpo, podremos también transmitir emociones, sensaciones o inspirar en el otro cierto sentir. Esto también tiene reminiscencias evolutivas, que asocian el tamaño a la fuerza, la sumisión al abatimiento, etc.</li>
      <li>Apariencia física. El complejo código de las modas, las vestimentas, los accesorios, los cortes de cabello y toda una vertiente comunicativa también constituye el lenguaje no verbal.</li>
      <li>Paralenguaje. Sonidos no lingüísticos, como el llanto de un bebé.</li>
      <li>Háptica. El contacto físico que hacemos con quienes nos comunicamos.</li>
      <li>Proxémica. El manejo del espacio entre emisor y receptor, mediante el cual puede sugerirse intimidad, agresividad, pasión y otras informaciones.</li>
    </ul>

    <h3>Características de la comunicación no verbal</h3>
    <p>La comunicación no verbal no sigue las mismas reglas básicas que la verbal, por lo que no tiene una sintaxis (un orden específico de aparición de los signos) sino que se articula en base al contexto y a las circunstancias.</p>
    
    <p>Existe cierto margen de convencionalidad en algunos casos, como en los movimientos de la cabeza para indicar un “sí” o un “no”, pero ni siquiera esos gestos son universales y en algunas culturas se interpretan al revés.</p>
    
    <p>Por otro lado, es una forma de comunicación no discrecional, que depende de la capacidad del emisor y del receptor de captar e interpretar el mensaje de manera apropiada, ya que no hay un código común o universal que intermedie.</p>
    <h4>
      {/* El enlace a la fuente */}
      Fuente:{" "}
      <a href="https://concepto.de/comunicacion-no-verbal/" target="_blank" rel="noopener noreferrer">
        Concepto de comunicacion no verbal
      </a>
    </h4>
    <h4 className='title title-lg'>¿Qué es la comunicación verbal?</h4>
    <p>
      Es el proceso mediante el cual dos o más personas interactúan compartiendo información a través de la palabra.
    </p>
    <p>
      La comunicación verbal muchas veces se complementa con la no verbal para reforzar el mensaje y dar una idea más clara de lo que se quiere decir. Aunque en ocasiones estos dos tipos de comunicación pueden contradecirse durante la transmisión del mensaje.
    </p>
    <p>
      La comunicación verbal implica el uso de palabras para construir oraciones que transmiten pensamientos. Estas palabras pueden ser emitidas oralmente o a través de la escritura.
    </p>
    <h4>Tipos de comunicación verbal</h4>
    <p>
      <strong>Comunicación oral:</strong> Es aquella donde se utilizan las palabras habladas o se emiten sonidos de forma verbal. La entonación y la vocalización juegan un papel fundamental en este tipo de comunicación para que el mensaje llegue efectivamente y pueda ser interpretado por el receptor.
    </p>
    <p>
      A lo largo de la historia, la comunicación oral se ha desarrollado con el origen de los idiomas y las características lingüísticas propias de cada población.
    </p>
    <p>
      <strong>Ejemplos de comunicación oral:</strong>
      <br />
      - Conversación entre colegas:
      <br />
      Colega 1: ¿Quién es?
      <br />
      Colega 2: Hola, Beatriz. Soy Rubén. ¿Cómo estás?
      <br />
      Colega 1: Hola, Rubén. ¡Cuánto tiempo sin saber de ti! Pues mira, me pillas de vacaciones. ¿Y tú? ¿Qué es de tu vida?
      <br />
      Colega 2: ¡Qué suerte, de vacaciones! Yo bien, ¿para qué voy a estar mal? Ja, ja. Quería avisarte de que estaré las próximas dos semanas en la ciudad, por si podemos tomar un café.
      <br />
      Colega 1: ¡Genial! No sabes la ilusión que me hace verte. Te llamo la semana que viene y concretamos día y hora. ¿Te parece?
      <br />
      Colega 2: Perfecto, Beatriz. Hablamos, pues. ¡Un beso!
      <br />
      Colega 1: Chao, Rubén. ¡Un abrazo!
    </p>
    <p>
      <strong>Comunicación escrita:</strong> Es aquella que se realiza a través de códigos escritos. A diferencia de la comunicación oral, la escrita puede perdurar en el tiempo. Esto ocasiona que la interacción con el receptor no se produzca de manera inmediata.
    </p>
    <p>
      <strong>Ejemplos de comunicación escrita:</strong>
      <br />
      - Correo electrónico:
      <br />
      Asunto: Aviso de pago pendiente
      <br />
      Estimado cliente,
      <br />
      Nos ponemos en contacto con usted para informarle de que el recibo correspondiente al mes de octubre está pendiente de pago. Le recordamos que dispone de 30 días hábiles, a partir de hoy, para efectuar el abono de la cuota.
      <br />
      En caso de no abonar el importe en el periodo marcado, se procederá a dar de baja el servicio.
      <br />
      Para cualquier aclaración, no dude en ponerse en contacto con nuestro servicio de atención al cliente, en esta dirección de correo o en el teléfono 7053456021.
      <br />
      Reciba un cordial saludo.
    </p>
    <h4>
      {/* El enlace a la fuente */}
      Fuente:{" "}
      <a href="https://www.diferenciador.com/tipos-de-comunicacion/" target="_blank" rel="noopener noreferrer">
        Concepto de comunicacion verbal
      </a>
    </h4>
    <h4 className='title title-lg'>¿Qué es la oratoria?</h4>
    <p>
      La oratoria no es solo oralidad, es decir, no es el mero hecho de hablar a otro y otros, sino que involucra una cantidad de técnicas y reglas o principios que nos permiten expresarnos de manera clara ante un público numeroso.
    </p>
    <p>
      La finalidad de la oratoria es transmitir un mensaje sin miedos o desconfianzas y con desenvoltura. La oratoria está relacionada con la elocuencia, de poder convencer con nuestras palabras o conmover a quien o quienes nos oyen.
    </p>
    <h4>Tipos de oratoria</h4>
    <p>
      Existe en la actualidad una clasificación de los tipos de oratoria según la finalidad del orador. A continuación se expresan algunos tipos de oratoria:
    </p>
    <ul>
      <li><strong>Oratoria social:</strong> También llamada ceremonial, augural o sentimental, son las que se desarrollan en un determinado ámbito donde el ser humano participa de una ceremonia.</li>
      <li><strong>Oratoria pedagógica:</strong> Busca transmitir la cultura mediante la palabra hablada, es decir, transmite conocimientos. Es una oratoria didáctica o académica que busca enseñar.</li>
      <li><strong>Oratoria forense:</strong> Se usa dentro de la ciencia jurídica y busca exponer con claridad los informes de jueces, abogados y fiscales.</li>
      <li><strong>Oratoria persuasiva:</strong> Cuando los políticos exponen y debaten ideas políticas y utilizada principalmente en época de sufragio.</li>
      <li><strong>Oratoria sacra o religiosa:</strong> Realiza sermones a partir de la palabra de Dios utilizando como base la Biblia u otros libros religiosos.</li>
      <li><strong>Oratoria dentro de una empresa (llamada “Management Speaking”):</strong> Es utilizada por hombres de negocios y empresarios a fin de transmitir objetivos corporativos.</li>
    </ul>
    <p>
      La oratoria no es simplemente hablar en público, un buen orador debe reunir ciertas características que lo hacen distintos al resto de los hablantes comunes.
    </p>
    <ul>
      <li>La oratoria siempre se realiza con un orador individual frente a un público (receptor colectivo).</li>
      <li>El orador debe hablar con claridad, pero además con entusiasmo, eficacia y persuasión. El lenguaje es su herramienta principal. Un orador debe saber hacerse escuchar. Debe lograr que el público muestre interés y sea reflexivo.</li>
      <li>Debe el orador tener claro el fin de su discurso. Puede ser un discurso persuasivo, a fin de convencer al público de una opinión, por ejemplo. Además, puede enseñar, conmover o agradar a su público.</li>
      <li>La apariencia física es muy importante, así como el aseo personal. El atuendo que elige el orador debe estar acorde con las circunstancias, dependiendo si es una ocasión formal o informal.</li>
      <li>Un orador debe mantener una actitud positiva, estar relajado y gozar de buena salud física y psíquica.</li>
      <li>Además, debe poseer mucha capacidad de memoria, ya que la oratoria requiere un 90% de habla y apenas un poco de lectura de apuntes, de ser necesario.</li>
      <li>Un orador debe ser sincero y congruente, es decir, que haya relación entre lo que un orador dice y hace. Además, debe ser leal a quien ha confiado en él o ella.</li>
      <li>Un orador debe perder el miedo y los prejuicios a hablar en público, debe tener soltura y saber estar frente a un público.</li>
    </ul>
    <h4>
      {/* El enlace a la fuente */}
      Fuente:{" "}
      <a href="https://concepto.de/oratoria/
" target="_blank" rel="noopener noreferrer">
        Concepto de oratoria
      </a>
    </h4>
    <h4 className='title title-lg'>¿Qué es la comunicación asertiva?</h4>
    <p>
      El escritor y consultor en comunicación en el Observatorio de Recursos Humanos, Alfonso Aguiler, define la asertividad como “la herramienta o capacidad de expresar lo que uno quiere, piensa y siente de manera honesta, correcta y directa, sin que afecte las intenciones del interlocutor y respetando siempre lo que la otra persona siente y piensa”.
    </p>
    <p>
      De esta manera, una persona asertiva se caracteriza por tener un alto grado de empatía y una buena gestión de las emociones, así como un dominio del lenguaje corporal.
    </p>
    <p>
      Lo cierto es que el lenguaje corporal juega un papel muy importante en el proceso comunicativo, ya que, tal y como indica el estudio de Albert Mehrabian, el 55% de lo que decimos lo comunicamos de manera no verbal. De ahí que una de las claves de este tipo de comunicación sea que la postura corporal, los gestos, el tono de voz y la mirada acompañen en todo momento la actitud de respeto, escucha activa y tranquilidad que implica la asertividad.
    </p>
    <p>
      Asimismo, el objetivo principal de la asertividad es trasladar una idea de manera clara, amable y empática, a diferencia de la comunicación pasiva o agresiva, ya que, por un lado, la pasiva tiende a evitar cualquier situación incómoda, lo cual genera frustración y deteriora la relación interpersonal, y, por el otro, la agresiva interviene sin tener en cuenta los intereses y los sentimientos de la otra parte.
    </p>
    <p>
      Sin duda, la actitud pasiva, agresiva y asertiva son tres maneras diferentes de afrontar una misma situación y, aunque no siempre es fácil porque entran muchos factores en juego, la comunicación asertiva es la más eficaz y la que más contribuye a una relación saludable, ya que esta logra el equilibrio entre nuestros intereses y derechos y los de nuestro interlocutor, creando un espacio de respeto y cordialidad frente a situaciones difíciles.
    </p>
    <h4>3 técnicas de comunicación asertiva</h4>
    <p>¿Qué técnicas existen para poner en práctica la asertividad? A continuación, te presentamos algunas de ellas.</p>
    <ul>
      <li><strong>Técnica del banco de niebla:</strong> Esta técnica consiste en frenar y disipar la tensión de la conversación, al mismo tiempo que se da parte de la razón a la otra parte, pero sin perder tu postura. Se trata de una buena manera de afrontar las críticas o de evitar el conflicto directo.
        Frases como: “es cierto lo que comentas aquí”, “en este punto tienes razón” o “estoy de acuerdo contigo en que…” te ayudarán a llegar a un punto intermedio antes de exponer tu argumento.
      </li>
      <li><strong>Técnica de la pregunta asertiva:</strong> Este método consiste en asumir que la crítica que nos hacen es positiva. De esta manera, se formula una pregunta con el fin de obtener más información sobre cómo se puede mejorar. Es una técnica que permite dar la vuelta a la situación, sin cuestionar al otro, y ponerse en el mismo lado para encontrar una solución común.
        Por ejemplo, imagina que tu superior te dice que “este informe está mal hecho”. Si quieres poner en práctica la técnica de la pregunta asertiva, le puedes contestar: “¿cómo crees que habría que enfocarlo para que el resultado sea mejor?”
      </li>
      <li><strong>Técnica del disco rayado:</strong> Se trata de mantener tu postura repitiendo la misma frase ante peticiones o demandas no deseadas, pero sin agresividad verbal y manteniendo un tono calmado.
        Por ejemplo, pongamos por caso que estás negociando las vacaciones con un compañero y te pregunta: “¿te importaría cambiarme la semana de octubre que me quiero ir de puente? Y tú respondes: “lo siento, pero ya tengo todo planificado para esos días”. Sin embargo, tu compañero persiste e insiste en que hagas una llamada para cambiarlo y así le concedas el favor. En este caso, puedes aplicar la técnica del disco rayado y, sin alzar la voz, puedes repetirle: ”de verdad que lo siento, pero ya lo tengo todo planeado”.
      </li>
    </ul>
    <h4>Beneficios de la asertividad en el entorno laboral</h4>
    <p>
      La habilidad de comunicar de manera efectiva y empática no solo permite establecer unas relaciones interpersonales más estables y saludables y una mayor cooperación dentro del equipo, sino que también conlleva otras ventajas como:
    </p>
    <ul>
      <li><strong>Mejores negociaciones:</strong> la asertividad permite llegar a acuerdos más beneficiosos para todas las partes, gracias a la escucha y el entendimiento de lo que ocurre en el entorno y de las necesidades e intereses de la otra parte.</li>
      <li><strong>Un liderazgo más efectivo:</strong> el 30% de los empleados cree que sus managers no fomentan una cultura de comunicación transparente y abierta, una situación que puede llegar a afectar el rendimiento del equipo, el trabajo y la motivación. Por este motivo, con el buen entendimiento que implica la comunicación asertiva, muchos de los despidos podrían evitarse.</li>
      <li><strong>Un mejor clima organizacional:</strong> una buena capacidad comunicativa entre los miembros del equipo fomenta un ambiente más colaborativo, con menos tensiones e inequívocos.</li>
    </ul>
    <h4>
      {/* El enlace a la fuente */}
      Fuente:{" "}
      <a href="https://concepto.de/oratoria/
" target="_blank" rel="noopener noreferrer">
        Concepto de comunicacion asertiva
      </a>
    </h4>
  </div>
)}

                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Articles;
