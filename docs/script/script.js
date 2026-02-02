document.addEventListener('DOMContentLoaded', () => {

  const traducciones = {
    'es': {
      'nav-inicio': 'Inicio',
      'nav-proyectos': 'Proyectos',
      'nav-habilidades': 'Habilidades',
      'nav-sobremi': 'Sobre mí',
      'nav-cert': 'Certificaciones',
      'nav-contacto': 'Contacto',
      'hero-saludo': 'HOLA, SOY',
      'hero-nombre': 'SARA NOEMÍ BAÑUELOS PÉREZ',
      'hero-rol': 'DESARROLLADORA',
      'hero-desc': 'Apasionada por crear experiencias digitales limpias y funcionales. Disfruto trabajar en proyectos donde el código, el diseño y la organización se integran para crear soluciones claras y bien estructuradas.',
      'hero-cv': 'Descargar CV',
      'hero-proyectos': 'Ver Proyectos',
      'proj-titulo': 'Proyectos Principales',
      'proj-tech': 'Tecnologías:',
      'proj-tools': 'Herramientas:',
      'proj2-titulo': 'Proyecto de Diseño de Aplicación',
      'proj2-desc': 'Diseño de interfaz para una aplicación móvil, enfocado en la usabilidad y la coherencia visual. Se elaboraron todas las pantallas y flujos de navegación mediante Figma.',
      'proj3-titulo': 'Sitio Web de Banda Musical',
      'proj3-desc': 'Sitio web informativo diseñado para una banda musical, con secciones dedicadas a los integrantes, su música e historia del grupo. Presenta un diseño atractivo y adaptable para distintos dispositivos.',
      'skills-titulo': 'Habilidades Técnicas',
      'skills-lang-h3': 'Lenguajes',
      'skills-lang-p': 'C<br> Java <br>Kotlin<br> JavaScript <br>CSS<br>HTML',
      'skills-db-h3': 'Bases de Datos',
      'skills-db-p': 'MySQL',
      'skills-tools-h3': 'Herramientas',
      'skills-tools-p': 'GitHub<br> GitLab<br> NetBeans<br> Packet Tracer <br>Figma<br> Jira <br>Trello<br> Android Studio<br> VS code',
      'skills-learn-h3': 'En aprendizaje',
      'skills-learn-p': 'React<br> Node.js<br> Python',
      'about-titulo': 'Sobre mí',
      'about-p': 'Soy estudiante de <strong> Ingeniería en Tecnologías de la Información e Innovación Digital</strong>, con interés en el desarrollo Front-End y el diseño de interfaces. Me gusta trabajar en proyectos donde el diseño, el código y la organización se combinan para crear soluciones claras y funcionales. He participado en proyectos en equipo donde he apoyado en la organización de tareas y la estructuración de ideas, así como en la definición de soluciones viables, además de contribuir en el diseño y desarrollo de interfaces. Me considero una persona responsable, detallista y en constante aprendizaje, con el objetivo de seguir creciendo profesionalmente y aportar valor en proyectos reales de software.',
      'cert-titulo': 'Certificaciones y Reconocimientos',
      'cert-cisco-titulo': 'Cursos y Certificaciones Cisco',
      'cert-li-1': 'Introduction to Networks',
      'cert-li-2': 'Switching, Routing and Wireless Essentials',
      'cert-li-3': 'Using Computer and Mobile Devices(Cisco)',
      'cert-li-4': 'Conciencia digital (Cisco)',
      'cert-li-5': 'HTML Essentials(Cisco)',
      'cert-li-6': 'CSS Essentials (Cisco)',
      'contact-titulo': 'Hablemos',
      'contact-desc': 'Abierta a nuevas oportunidades laborales. Puedes contactarme a través del siguiente formulario o mediante mis redes sociales.',
      'contact-name': 'Nombre',
      'contact-phone': 'Teléfono',
      'contact-msg': 'Mensaje',
      'contact-submit': 'Enviar',
      'contact-social': 'Mis Redes',
      'footer-copy': '© 2025 Sara Bañuelos ·'
    },
    'en': {
      'nav-inicio': 'Home',
      'nav-proyectos': 'Projects',
      'nav-habilidades': 'Skills',
      'nav-sobremi': 'About Me',
      'nav-cert': 'Certifications',
      'nav-contacto': 'Contact',
      'hero-saludo': 'HELLO, I AM',
      'hero-nombre': 'SARA NOEMÍ BAÑUELOS PÉREZ',
      'hero-rol': 'DEVELOPER',
      'hero-desc': 'Passionate about creating clean and functional digital experiences. I enjoy working on projects where code, design, and organization integrate to create clear and well-structured solutions.',
      'hero-cv': 'Download CV',
      'hero-proyectos': 'View Projects',
      'proj-titulo': 'Main Projects',
      'proj-tech': 'Technologies:',
      'proj-tools': 'Tools:',
      'proj2-titulo': 'Application Design Project',
      'proj2-desc': 'Interface design for a mobile application, focused on usability and visual consistency. All screens and navigation flows were developed using Figma.',
      'proj3-titulo': 'Music Band Website',
      'proj3-desc': 'Informational website designed for a music band, with sections dedicated to members, their music, and the group\'s history. Features an attractive and responsive design.',
      'skills-titulo': 'Technical Skills',
      'skills-lang-h3': 'Languages',
      'skills-lang-p': 'C<br> Java <br>Kotlin<br> JavaScript <br>CSS<br>HTML',
      'skills-db-h3': 'Databases',
      'skills-db-p': 'MySQL',
      'skills-tools-h3': 'Tools',
      'skills-tools-p': 'GitHub<br> GitLab<br> NetBeans<br> Packet Tracer <br>Figma<br> Jira <br>Trello<br> Android Studio<br> VS code',
      'skills-learn-h3': 'Learning',
      'skills-learn-p': 'React<br> Node.js<br> Python',
      'about-titulo': 'About Me',
      'about-p': 'I am an <strong>Information Technology and Digital Innovation Engineering</strong> student, with an interest in Front-End development and interface design. I like working on projects where design, code, and organization combine to create functional solutions. I have participated in team projects supporting task organization and idea structuring, contributing to the design and development of interfaces. I consider myself a responsible, detail-oriented person, aiming to grow professionally and add value to software projects.',
      'cert-titulo': 'Certifications and Recognitions',
      'cert-cisco-titulo': 'Cisco Courses and Certifications',
      'cert-li-1': 'Introduction to Networks',
      'cert-li-2': 'Switching, Routing and Wireless Essentials',
      'cert-li-3': 'Using Computer and Mobile Devices(Cisco)',
      'cert-li-4': 'Digital Awareness (Cisco)',
      'cert-li-5': 'HTML Essentials(Cisco)',
      'cert-li-6': 'CSS Essentials (Cisco)',
      'contact-titulo': 'Let\'s Talk',
      'contact-desc': 'Open to new job opportunities. You can contact me through the following form or via my social networks.',
      'contact-name': 'Name',
      'contact-phone': 'Phone',
      'contact-msg': 'Message',
      'contact-submit': 'Send',
      'contact-social': 'Social Media',
      'footer-copy': '© 2025 Sara Bañuelos ·'
    },
    'fr': {
      'nav-inicio': 'Accueil',
      'nav-proyectos': 'Projets',
      'nav-habilidades': 'Compétences',
      'nav-sobremi': 'À propos de moi',
      'nav-cert': 'Certifications',
      'nav-contacto': 'Contact',
      'hero-saludo': 'BONJOUR, JE SUIS',
      'hero-nombre': 'SARA NOEMÍ BAÑUELOS PÉREZ',
      'hero-rol': 'DÉVELOPPEUSE',
      'hero-desc': 'Passionnée par la création d’expériences numériques épurées et fonctionnelles. J’aime travailler sur des projets où le code, le design et l’organisation s’intègrent pour créer des solutions claires.',
      'hero-cv': 'Télécharger CV',
      'hero-proyectos': 'Voir Projets',
      'proj-titulo': 'Projets Principaux',
      'proj-tech': 'Technologies:',
      'proj-tools': 'Outils:',
      'proj2-titulo': 'Projet de Conception d’Application',
      'proj2-desc': 'Conception d’interface pour une application mobile, axée sur l’utilisabilité. Tous les écrans et flux de navigation ont été développés avec Figma.',
      'proj3-titulo': 'Site Web de Groupe de Musique',
      'proj3-desc': 'Site web informatif conçu pour un groupe de musique, avec des sections dédiées aux membres et à leur musique. Design attrayant et adaptable.',
      'skills-titulo': 'Compétences Techniques',
      'skills-lang-h3': 'Langages',
      'skills-lang-p': 'C<br> Java <br>Kotlin<br> JavaScript <br>CSS<br>HTML',
      'skills-db-h3': 'Bases de données',
      'skills-db-p': 'MySQL',
      'skills-tools-h3': 'Outils',
      'skills-tools-p': 'GitHub<br> GitLab<br> NetBeans<br> Packet Tracer <br>Figma<br> Jira <br>Trello<br> Android Studio<br> VS code',
      'skills-learn-h3': 'En apprentissage',
      'skills-learn-p': 'React<br> Node.js<br> Python',
      'about-titulo': 'À propos de moi',
      'about-p': 'Je suis étudiante en <strong>Ingénierie des Technologies de l’Information et de l’Innovation Numérique</strong>, avec un intérêt pour le développement Front-End. J’aime travailler sur des projets où le design et le code se combinent pour créer des solutions fonctionnelles. J’ai participé à des projets d’équipe en soutenant l’organisation des tâches et le développement d’interfaces. Je me considère comme une personne responsable et minutieuse, cherchant à apporter de la valeur à des projets logiciels réels.',
      'cert-titulo': 'Certifications et Reconnaissances',
      'cert-cisco-titulo': 'Cours et Certifications Cisco',
      'cert-li-1': 'Introduction to Networks',
      'cert-li-2': 'Switching, Routing and Wireless Essentials',
      'cert-li-3': 'Using Computer and Mobile Devices(Cisco)',
      'cert-li-4': 'Sensibilisation au numérique (Cisco)',
      'cert-li-5': 'HTML Essentials(Cisco)',
      'cert-li-6': 'CSS Essentials (Cisco)',
      'contact-titulo': 'Parlons-en',
      'contact-desc': 'Ouverte à de nouvelles opportunités. Vous pouvez me contacter via le formulaire suivant ou mes réseaux sociaux.',
      'contact-name': 'Nom',
      'contact-phone': 'Téléphone',
      'contact-msg': 'Message',
      'contact-submit': 'Envoyer',
      'contact-social': 'Mes Réseaux',
      'footer-copy': '© 2025 Sara Bañuelos ·'
    }
  };

  const botonesIdioma = document.querySelectorAll('.lang-btn');
  const elementosATraducir = document.querySelectorAll('[data-key]');

  const traducirPagina = (lang) => {
    elementosATraducir.forEach(elem => {
      const key = elem.dataset.key;
      const traduccion = traducciones[lang][key];
      if (traduccion) {
        if (elem.tagName === 'INPUT' && elem.type === 'submit') {
          elem.value = traduccion;
        } else {
          elem.innerHTML = traduccion;
        }
      }
    });

    botonesIdioma.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('idioma-preferido', lang);
  };

  botonesIdioma.forEach(btn => {
    btn.addEventListener('click', () => traducirPagina(btn.dataset.lang));
  });

  const idiomaGuardado = localStorage.getItem('idioma-preferido') || 'es';
  traducirPagina(idiomaGuardado);

  // --- Lógica del Modal PDF ---
  const modal = document.getElementById('modal-pdf');
  const cerrarModal = document.querySelector('.modal-cerrar');
  const iframePdf = document.getElementById('pdf-viewer');
  const linksPdf = document.querySelectorAll('.link-pdf');

  linksPdf.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      iframePdf.src = e.currentTarget.href;
      modal.classList.add('visible');
    });
  });

  const cerrar = () => {
    modal.classList.remove('visible');
    iframePdf.src = "";
  };

  cerrarModal.addEventListener('click', cerrar);
  modal.addEventListener('click', (e) => { if (e.target === modal) cerrar(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') cerrar(); });
});