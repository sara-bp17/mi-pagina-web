// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

  // =========================================================
  // --- 1. LÓGICA DE TRADUCCIÓN DE IDIOMAS ---
  // =========================================================

  const traducciones = {
    // ---- ESPAÑOL ----
    'es': {
      'nav-inicio': 'Inicio',
      'nav-proyectos': 'Proyectos',
      'nav-habilidades': 'Habilidades',
      'nav-sobremi': 'Sobre mí',
      'nav-cert': 'Certificaciones',
      'nav-contacto': 'Contacto',
      'hero-saludo': 'HOLA, SOY',
      'hero-nombre': 'SARA NOEMÍ BAÑUELOS PÉREZ',
      'hero-rol': 'DESARROLLADORA FULL-STACK',
      'hero-desc': 'Apasionada por crear experiencias digitales limpias, funcionales y con un toque creativo. Me gusta trabajar en proyectos donde el diseño y el código se combinan con propósito.',
      'hero-cv': 'Descargar CV',
      'hero-proyectos': 'Ver Proyectos',
      'proj-titulo': 'Proyectos Principales',
      'proj-tech': 'Tecnologías:',
      'proj-tools': 'Herramientas:',
      // 'proj1-titulo': 'Aplicación de Encuestas sobre Experiencia en el Cine', // Esta key ya no existe en tu HTML
      // 'proj1-desc': '...',
      'proj2-titulo': 'Proyecto de Diseño de Aplicación',
      'proj2-desc': 'Diseño de interfaz para una aplicación móvil, enfocado en la usabilidad y la coherencia visual. Se elaboraron todas las pantallas y flujos de navegación mediante Figma.',
      'proj3-titulo': 'Sitio Web de Banda Musical',
      'proj3-desc': 'Sitio web informativo diseñado para una banda musical, con secciones dedicadas a los integrantes, su música e historia del grupo. Presenta un diseño atractivo y adaptable para distintos dispositivos.',
      'skills-titulo': 'Habilidades Técnicas',
      'skills-lang-h3': 'Lenguajes',
      'skills-lang-p': 'C++, Java, Kotlin, HTML, CSS, JavaScript',
      'skills-db-h3': 'Bases de Datos',
      'skills-db-p': 'MySQL',
      'skills-tools-h3': 'Herramientas',
      'skills-tools-p': 'GitHub, GitLab, NetBeans, Packet Tracer, Figma, Jira, Trello, Android Studio',
      'skills-learn-h3': 'En aprendizaje',
      'skills-learn-p': 'React, Node.js, Python',
      'about-titulo': 'Sobre mí',
      // ARREGLO: <strong> está ahora DENTRO del diccionario
      'about-p': 'Soy una persona con habilidades de liderazgo, comunicación efectiva y gusto por la tecnología. Me considero perfeccionista y enfocada en los detalles, lo que me ayuda a entregar proyectos de calidad. A lo largo de mi formación en Tecnologías de la Información, he disfrutado materias como <strong>Programación Orientada a Objetos, Bases de Datos, Análisis y Diseño de Software</strong> y <strong>Aplicaciones Web</strong>, las cuales fortalecen mi pasión por el desarrollo de software.',
      'cert-titulo': 'Certificaciones y Reconocimientos',
      'cert-cisco-titulo': 'Cursos y Certificaciones Cisco',
      'cert-li-1': 'Introduction to Networks',
      'cert-li-2': 'Switching, Routing and Wireless Essentials',
      'cert-li-3': 'Using Computer and Mobile Devices(Cisco)',
      'cert-li-4': 'Conciencia digital (Cisco)',
      'cert-li-5': 'HTML Essentials(Cisco)',
      'cert-li-6': 'CSS Essentials (Cisco)',
      'footer-copy': '© 2025 Sara Bañuelos ·',
      'footer-li': 'LinkedIn',
      'footer-gm': 'sara.banuelosp17@gmail.com', // ARREGLO: Actualizado
      'footer-gh': 'GitHub'
    },
    // ---- INGLÉS ----
    'en': {
      'nav-inicio': 'Home',
      'nav-proyectos': 'Projects',
      'nav-habilidades': 'Skills',
      'nav-sobremi': 'About Me',
      'nav-cert': 'Certifications',
      'nav-contacto': 'Contact',
      'hero-saludo': 'HELLO, I AM',
      'hero-rol': 'FULL-STACK DEVELOPER',
      'hero-desc': 'Passionate about creating clean, functional, and creative digital experiences. I enjoy working on projects where design and code combine with purpose.',
      'hero-cv': 'Download CV',
      'hero-proyectos': 'View Projects',
      'proj-titulo': 'Main Projects',
      'proj-tech': 'Technologies:',
      'proj-tools': 'Tools:',
      'proj2-titulo': 'Application Design Project',
      'proj2-desc': 'Interface design for a mobile application, focused on usability and visual consistency. All screens and navigation flows were developed using Figma.',
      'proj3-titulo': 'Music Band Website',
      'proj3-desc': 'Informational website designed for a music band, with sections dedicated to the members, their music, and the group\'s history. It features an attractive and responsive design for different devices.',
      'skills-titulo': 'Technical Skills',
      'skills-lang-h3': 'Languages',
      'skills-db-h3': 'Databases',
      'skills-tools-h3': 'Tools',
      'skills-learn-h3': 'Currently Learning',
      'about-titulo': 'About Me',
      // ARREGLO: <strong> está ahora DENTRO del diccionario
      'about-p': 'I am a person with leadership skills, effective communication, and a passion for technology. I consider myself a perfectionist focused on details, which helps me deliver quality projects. Throughout my education in Information Technologies, I have enjoyed subjects like <strong>Object-Oriented Programming, Databases, Software Analysis and Design</strong>, and <strong>Web Applications</strong>, which strengthen my passion for software development.',
      'cert-titulo': 'Certifications and Recognitions',
      'cert-cisco-titulo': 'Cisco Courses and Certifications',
      'cert-li-1': 'Introduction to Networks',
      'cert-li-2': 'Switching, Routing and Wireless Essentials',
      'cert-li-3': 'Using Computer and Mobile Devices(Cisco)',
      'cert-li-4': 'Digital Awareness (Cisco)',
      'cert-li-5': 'HTML Essentials(Cisco)',
      'cert-li-6': 'CSS Essentials (Cisco)',
      'footer-copy': '© 2025 Sara Bañuelos ·',
      'footer-li': 'LinkedIn',
      'footer-gm': 'sara.banuelosp17@gmail.com', // ARREGLO: Actualizado
      'footer-gh': 'GitHub'
    },
    // ---- FRANCÉS ----
    'fr': {
      'nav-inicio': 'Accueil',
      'nav-proyectos': 'Projets',
      'nav-habilidades': 'Compétences',
      'nav-sobremi': 'À propos de moi',
      'nav-cert': 'Certifications',
      'nav-contacto': 'Contact',
      'hero-saludo': 'BONJOUR, JE SUIS',
      'hero-rol': 'DÉVELOPPEUSE FULL-STACK',
      'hero-desc': 'Passionnée par la création d’expériences numériques épurées, fonctionnelles et avec une touche créative. J’aime travailler sur des projets où le design et le code se combinent avec un objectif.',
      'hero-cv': 'Télécharger CV',
      'hero-proyectos': 'Voir Projets',
      'proj-titulo': 'Projets Principaux',
      'proj-tech': 'Technologies:',
      'proj-tools': 'Outils:',
      'proj2-titulo': 'Projet de Conception d’Application',
      'proj2-desc': 'Conception d’interface pour une application mobile, axée sur l’utilisabilité et la cohérence visuelle. Tous les écrans et flux de navigation ont été développés avec Figma.',
      'proj3-titulo': 'Site Web de Groupe de Musique',
      'proj3-desc': 'Site web informatif conçu pour un groupe de musique, avec des sections dédiées aux membres, à leur musique et à l’histoire du groupe. Il présente un design attrayant et adaptable à différents appareils.',
      'skills-titulo': 'Compétences Techniques',
      'skills-lang-h3': 'Langages',
      'skills-db-h3': 'Bases de données',
      'skills-tools-h3': 'Outils',
      'skills-learn-h3': 'En apprentissage',
      'about-titulo': 'À propos de moi',
      // ARREGLO: <strong> está ahora DENTRO del diccionario
      'about-p': 'Je suis une personne dotée de compétences en leadership, d’une communication efficace et d’un goût pour la technologie. Je me considère perfectionniste et axée sur les détails, ce qui m’aide à livrer des projets de qualité. Tout au long de ma formation en Technologies de l’Information, j’ai apprécié des matières comme la <strong>Programmation Orientée Objet, les Bases de Données, l’Analyse et la Conception de Logiciels</strong>, et les <strong>Applications Web</strong>, qui renforcent ma passion pour le développement de logiciels.',
      'cert-titulo': 'Certifications et Reconnaissances',
      'cert-cisco-titulo': 'Cours et Certifications Cisco',
      'cert-li-1': 'Introduction to Networks',
      'cert-li-2': 'Switching, Routing and Wireless Essentials',
      'cert-li-3': 'Using Computer and Mobile Devices(Cisco)',
      'cert-li-4': 'Sensibilisation au numérique (Cisco)',
      'cert-li-5': 'HTML Essentials(Cisco)',
      'cert-li-6': 'CSS Essentials (Cisco)',
      'footer-copy': '© 2025 Sara Bañuelos ·',
      'footer-li': 'LinkedIn',
      'footer-gm': 'sara.banuelosp17@gmail.com', // ARREGLO: Actualizado
      'footer-gh': 'GitHub'
    }
  };

  // --- Lógica del Traductor (ARREGLADA Y SIMPLIFICADA) ---
  const botonesIdioma = document.querySelectorAll('.lang-btn');
  const elementosATraducir = document.querySelectorAll('[data-key]');

  const traducirPagina = (lang) => {
    elementosATraducir.forEach(elem => {
      const key = elem.dataset.key;
      const traduccion = traducciones[lang][key];
      
      if (traduccion) {
        // Esta sola línea maneja todo:
        // - Pone texto simple en los enlaces (<a>)
        // - Pone HTML (con <strong>) en el párrafo 'about-p'
        elem.innerHTML = traduccion;
      }
    });

    // Actualiza el botón activo
    botonesIdioma.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      }
    });

    // Guarda la preferencia de idioma
    localStorage.setItem('idioma-preferido', lang);
  };

  // Añade 'click' listener a cada botón de idioma
  botonesIdioma.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      traducirPagina(lang);
    });
  });

  // Carga el idioma guardado al iniciar
  const idiomaGuardado = localStorage.getItem('idioma-preferido');
  if (idiomaGuardado) {
    traducirPagina(idiomaGuardado);
  }

  // =========================================================
  // --- 2. LÓGICA DEL MODAL DE CERTIFICADOS ---
  // =========================================================
  
  const modal = document.getElementById('modal-pdf');
  const cerrarModal = document.querySelector('.modal-cerrar');
  const iframePdf = document.getElementById('pdf-viewer');
  const linksPdf = document.querySelectorAll('.link-pdf');

  // Función para ABRIR el modal
  const abrirModal = (e) => {
    e.preventDefault();
    const pdfUrl = e.currentTarget.href;
    iframePdf.src = pdfUrl;
    modal.classList.add('visible');
  };

  // Función para CERRAR el modal
  const cerrar = () => {
    modal.classList.remove('visible');
    iframePdf.src = ""; // Limpia el iframe para detener la carga
  };

  // Asigna el evento a cada enlace de certificado
  linksPdf.forEach(link => {
    link.addEventListener('click', abrirModal);
  });

  // Asigna el evento al botón de cerrar (la 'X')
  cerrarModal.addEventListener('click', cerrar);

  // Cierra el modal si se hace clic en el fondo oscuro
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      cerrar();
    }
  });

  // Cierra el modal con la tecla 'Escape'
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('visible')) {
      cerrar();
    }
  });

});