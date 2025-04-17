<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Innovation & Incubation Club</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    /* ===== Navbar Styling ===== */
    header {
      position: sticky;
      top: 0;
      width: 100%;
      background-color: #000;
      z-index: 1000;
    }

    .navbar {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .logo-img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }

    .logo-text {
      font-size: 1.4rem;
      font-weight: bold;
      color: #fff;
      text-transform: uppercase;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-links a {
      text-decoration: none;
      color: #fff;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-links a:hover {
      color: #ffff00 ;
    }

    .cta-btn {
      background-color: #ffff00;
      color: black;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 600;
      transition: background-color 0.3s ease;
    }

    .cta-btn:hover {
      background-color: #009acd;
    }

    /* ===== Hamburger Menu ===== */
    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 5px;
    }

    .hamburger span {
      height: 3px;
      width: 25px;
      background: #fff;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      .nav-links {
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        flex-direction: column;
        background-color: #000;
        padding: 1rem;
        display: none;
      }

      .nav-links.active {
        display: flex;
      }

      .hamburger {
        display: flex;
      }
    }
  </style>
</head>
<body>

  <header>
    <div class="navbar">
      <!-- Logo Image and Text -->
      <div class="logo-container">
        <img src="if.jpeg" alt="Logo" class="logo-img" />
        
      </div>

      <!-- Navigation Links -->
      <nav class="nav-links" id="navLinks">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Programs</a>
        <a href="#">Startups</a>
        <a href="#">Events</a>
        <a href="#">Team</a>
        <a href="#">Contact</a>
        <a href="#" class="cta-btn">Apply Now</a>
      </nav>

      <!-- Hamburger for Mobile -->
      <div class="hamburger" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>

  <script>
    function toggleMenu() {
      const nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
    }
  </script>
  
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #000;
      color: #fff;
    }

    .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4rem 10%;
      min-height: 90vh;
      background: linear-gradient(to right, #000 40%, #111 100%);
      flex-wrap: wrap;
    }

    .hero-content {
      max-width: 600px;
    }

    .hero h1 {
      font-size: 3rem;
      line-height: 1.2;
      margin-bottom: 1rem;
      color: #ffff00;
    }

    .hero p {
      font-size: 1.1rem;
      color: #ccc;
      margin-bottom: 2rem;
    }

    .hero .cta-btn {
      background-color: #ffff00;
      color: #000;
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      text-decoration: none;
    }

    .hero .cta-btn:hover {
      background-color: #009acd;
    }

    .hero-image {
      flex: 1;
      max-width: 500px;
      margin-top: 2rem;
    }

    .hero-image img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 0 30px rgba( 255, 255, 194);
    }

    @media (max-width: 768px) {
      .hero {
        flex-direction: column;
        text-align: center;
        padding: 2rem 5%;
      }

      .hero-content {
        max-width: 100%;
      }

      .hero-image {
        margin-top: 2rem;
      }
    }
  </style>
</head>
<body>

  <section class="hero">
    <div class="hero-content">
      <h1>Empowering Innovation, Incubating Foundation</h1>
      <p>We support visionary students and startups to transform bold ideas into scalable ventures through mentorship, funding, and real-world resources.</p>
      <a href="#programs" class="cta-btn">Explore Programs</a>
    </div>

    <div class="hero-image">
      <img src="star1.jpeg" alt="Innovation and Incubation">
    </div>
  </section>
  <style>
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
        }
        .section {
            width: 300px;
            padding: 20px;
            background: #f4f4f4;
            border-radius: 10px;
            text-align: center;
        }
        .carousel {
            position: relative;
            max-width: 800px;
            margin: 40px auto;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 0 30px rgba( 255, 255, 194);
        }
        .carousel-image {
            display: none;
            width: 100%;
            height: auto;
			box-shadow: 0 0 30px rgba( 255, 255, 194);
        }
        .carousel-image.active {
            display: block;
        }
        .prev, .next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0,0,0,0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            font-size: 18px;
            border-radius: 50%;
        }
        .prev { left: 10px; }
        .next { right: 10px; }
    </style>
	<section class="carousel">
        <img src="col.jpeg" class="carousel-image active" alt="Slide 1">
        <img src="col2.jpg" class="carousel-image" alt="Slide 2">
        <img src="col3.jpeg" class="carousel-image" alt="Slide 3">
        <img src="col4.jpeg" class="carousel-image" alt="Slide 4">
        <img src="col5.jpeg" class="carousel-image" alt="Slide 5">
        <img src="col6.jpeg" class="carousel-image" alt="Slide 6">
        <button class="prev" onclick="changeSlide(-1)">❮</button>
        <button class="next" onclick="changeSlide(1)">❯</button>
    </section>
	<script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-image');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) slide.classList.add('active');
            });
        }

        function changeSlide(step) {
            currentSlide = (currentSlide + step + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        // Optional: autoplay every 2 seconds
        setInterval(() => {
            changeSlide(1);
        }, 5000);
    </script>

  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #000;
      color: #fff;
    }

    .about-section {
      padding: 4rem 10%;
      background-color: #0a0a0a;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 3rem;
    }

    .about-text {
      flex: 1;
      min-width: 300px;
    }

    .about-text h2 {
      font-size: 2.5rem;
      color: #ffff00;
      margin-bottom: 1rem;
    }

    .about-text p {
      font-size: 1.1rem;
      color: #ccc;
      line-height: 1.6;
    }

    .about-values {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 300px;
    }

    .value-card {
      background-color: #111;
      padding: 1.5rem;
      border-left: 5px solid #ffff00;
      border-radius: 5px;
      transition: transform 0.3s ease;
	  box-shadow: 0 8px 20px rgba(255,255,194);
    }

    .value-card:hover {
      transform: translateY(-5px);
    }

    .value-card h4 {
      margin-bottom: 0.5rem;
      color: ##ffff00;
    }

    .value-card p {
      color: #ccc;
      font-size: 0.95rem;
      line-height: 1.4;
    }

    @media (max-width: 768px) {
      .about-section {
        flex-direction: column;
        padding: 3rem 5%;
        text-align: center;
      }

      .about-values {
        align-items: center;
      }

      .value-card {
        width: 100%;
      }
    }
  </style>
</head>
<body>

  <section class="about-section" id="about">
    <div class="about-text">
      <h2>About Us</h2>
      <p>
        The Innovation & Incubation Foundation Club is committed to fostering entrepreneurial spirit and technological innovation among students and early-stage startups. 
        <br><br>
        Our mission is to create a nurturing ecosystem where ideas are transformed into impactful ventures through mentoring, guidance, and institutional support.
      </p>
    </div>

    <div class="about-values">
      <div class="value-card">
        <h4>💡 Innovation</h4>
        <p>We cultivate creative thinking and forward-looking solutions to real-world challenges.</p>
      </div>
      <div class="value-card">
        <h4>🤝 Collaboration</h4>
        <p>We believe in the power of teamwork, partnerships, and knowledge-sharing.</p>
      </div>
      <div class="value-card">
        <h4>🌍 Impact</h4>
        <p>Our goal is to enable startups that solve meaningful problems and make a lasting difference.</p>
      </div>
    </div>
  </section>
  
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #000;
      color: #fff;
    }

    .services-section {
      padding: 4rem 10%;
      background-color: #0a0a0a;
      text-align: center;
    }

    .services-section h2 {
      font-size: 2.5rem;
      color: #ffff00;
      margin-bottom: 1rem;
    }

    .services-section p {
      font-size: 1.1rem;
      color: #ccc;
      margin-bottom: 3rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background-color: #111;
      padding: 2rem;
      border-radius: 10px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-left: 4px solid #ffff00;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(255,255,194);
    }

    .service-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #ffff00;
    }

    .service-title {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      color: #fff;
    }

    .service-desc {
      color: #ccc;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      .services-section {
        padding: 3rem 5%;
      }
    }
  </style>
</head>
<body>

  <section class="services-section" id="services">
    <h2>What We Do</h2>
    <p>Empowering entrepreneurs through innovation, mentorship, and real-world resources.</p>

    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">🚀</div>
        <div class="service-title">Startup Incubation</div>
        <div class="service-desc">
          Providing infrastructure, mentorship, and a launchpad for your startup journey.
        </div>
      </div>

      <div class="service-card">
        <div class="service-icon">🎓</div>
        <div class="service-title">Mentorship Programs</div>
        <div class="service-desc">
          Access to expert mentors from industry and academia to guide your growth.
        </div>
      </div>

      <div class="service-card">
        <div class="service-icon">💼</div>
        <div class="service-title">Workshops & Training</div>
        <div class="service-desc">
          Hands-on learning sessions on entrepreneurship, design thinking, and funding.
        </div>
      </div>

      <div class="service-card">
        <div class="service-icon">💡</div>
        <div class="service-title">Innovation Challenges</div>
        <div class="service-desc">
          Regular hackathons and competitions to foster creativity and problem-solving.
        </div>
      </div>

      <div class="service-card">
        <div class="service-icon">📈</div>
        <div class="service-title">Funding & Investor Connect</div>
        <div class="service-desc">
          Get connected with angel investors, VCs, and startup grants through our network.
        </div>
      </div>

      <div class="service-card">
        <div class="service-icon">🧪</div>
        <div class="service-title">Research to Market</div>
        <div class="service-desc">
          Turn your academic research and projects into viable commercial solutions.
        </div>
      </div>
    </div>
  </section>
  
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #000;
      color: #fff;
    }

    .impact-section {
      padding: 4rem 10%;
      background-color: #0a0a0a;
      text-align: center;
    }

    .impact-section h2 {
      font-size: 2.5rem;
      color: #ffff00;
      margin-bottom: 1rem;
    }

    .impact-section p {
      font-size: 1.1rem;
      color: #ccc;
      margin-bottom: 3rem;
    }

    .counters {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .counter-card {
      background-color: #111;
      padding: 2rem;
      border-radius: 8px;
      border-top: 4px solid #ffff00;
    }

    .counter-number {
      font-size: 2.2rem;
      color: #ffff00;
      font-weight: bold;
    }

    .counter-label {
      margin-top: 0.5rem;
      font-size: 1rem;
      color: #ccc;
    }

    .highlights {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .highlight-card {
      background-color: #111;
      padding: 1.5rem;
      border-left: 4px solid #ffff00;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }

    .highlight-card:hover {
      transform: translateY(-5px);
    }

    .highlight-title {
      font-size: 1.2rem;
      color: #ffff00;
      margin-bottom: 0.5rem;
    }

    .highlight-desc {
      color: #ccc;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      .impact-section {
        padding: 3rem 5%;
      }
    }
  </style>
</head>
<body>

<section class="impact-section" id="impact">
  <h2>Impact & Highlights</h2>
  <p>We’re proud of the milestones we've achieved and the innovation we’ve helped bring to life.</p>

  <!-- Animated Counters -->
  <div class="counters">
    <div class="counter-card">
      <div class="counter-number" data-target="125">0</div>
      <div class="counter-label">Startups Incubated</div>
    </div>
    <div class="counter-card">
      <div class="counter-number" data-target="40">0</div>
      <div class="counter-label">Expert Mentors</div>
    </div>
    <div class="counter-card">
      <div class="counter-number" data-target="15">0</div>
      <div class="counter-label">Patents Filed</div>
    </div>
    <div class="counter-card">
      <div class="counter-number" data-target="750000">0</div>
      <div class="counter-label">Funding Facilitated (INR)</div>
    </div>
  </div>

  <!-- Highlight Cards -->
  <div class="highlights">
    <div class="highlight-card">
      <div class="highlight-title">🏆 National Innovation Award</div>
      <div class="highlight-desc">
        Recognized as one of the top university incubation programs in 2024.
      </div>
    </div>
    <div class="highlight-card">
      <div class="highlight-title">🤝 Industry Partnerships</div>
      <div class="highlight-desc">
        Collaborations with 20+ startups, corporates, and government bodies.
      </div>
    </div>
    <div class="highlight-card">
      <div class="highlight-title">🌐 Global Reach</div>
      <div class="highlight-desc">
        Projects and innovations from our incubator have reached 5+ countries.
      </div>
    </div>
  </div>
</section>

<!-- Counter Animation Script -->
<script>
  const counters = document.querySelectorAll('.counter-number');

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const speed = 200; // lower = faster
    const increment = Math.ceil(target / speed);

    let count = 0;

    const updateCount = () => {
      count += increment;
      if (count >= target) {
        counter.textContent = target.toLocaleString();
      } else {
        counter.textContent = count.toLocaleString();
        requestAnimationFrame(updateCount);
      }
    };

    updateCount();
  };

  // Trigger animation when in viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => observer.observe(counter));
</script>

<style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #000;
      color: #fff;
    }

    .portfolio-section {
      padding: 4rem 10%;
      background-color: #0a0a0a;
      text-align: center;
    }

    .portfolio-section h2 {
      font-size: 2.5rem;
      color: #ffff00;
      margin-bottom: 1rem;
    }

    .portfolio-section p {
      font-size: 1.1rem;
      color: #ccc;
      margin-bottom: 3rem;
    }

    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 2rem;
    }

    .startup-card {
      background-color: #111;
      border-radius: 10px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-top: 4px solid #ffff00;
    }

    .startup-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba( 255,255,194);
    }

    .startup-logo {
      width: 100%;
      height: 180px;
      object-fit: cover;
      background-color: #222;
    }

    .startup-content {
      padding: 1.2rem;
    }

    .startup-name {
      font-size: 1.2rem;
      font-weight: bold;
      color: #ffff00;
      margin-bottom: 0.5rem;
    }

    .startup-desc {
      color: #ccc;
      font-size: 0.95rem;
      line-height: 1.4;
      margin-bottom: 1rem;
    }

    .startup-link a {
      text-decoration: none;
      color: #ffff00;
      font-size: 0.95rem;
      font-weight: 600;
    }

    .startup-link a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .portfolio-section {
        padding: 3rem 5%;
      }
    }
  </style>
</head>
<body>

<section class="portfolio-section" id="portfolio">
  <h2>Startups Portfolio & Alumni</h2>
  <p>Meet some of the incredible ventures we've incubated and supported on their startup journey.</p>

  <div class="portfolio-grid">
    <!-- Startup 1 -->
    <div class="startup-card">
      <img src="tech.jpeg" alt="Startup 1" class="startup-logo" />
      <div class="startup-content">
        <div class="startup-name">TechNova</div>
        <div class="startup-desc">
          AI-powered platform for automating logistics and delivery in urban cities.
        </div>
        <div class="startup-link">
          <a href="https://technova.example.com" target="_blank">Visit Website</a>
        </div>
      </div>
    </div>

    <!-- Startup 2 -->
    <div class="startup-card">
      <img src="agro.jpeg" alt="Startup 2" class="startup-logo" />
      <div class="startup-content">
        <div class="startup-name">AgroEdge</div>
        <div class="startup-desc">
          Smart sensors and software helping farmers optimize irrigation and yield.
        </div>
        <div class="startup-link">
          <a href="#">Visit Website</a>
        </div>
      </div>
    </div>

    <!-- Startup 3 -->
    <div class="startup-card">
      <img src="health.jpeg" alt="Startup 3" class="startup-logo" />
      <div class="startup-content">
        <div class="startup-name">HealthLink</div>
        <div class="startup-desc">
          A telehealth platform connecting rural patients with urban doctors via video consultation.
        </div>
        <div class="startup-link">
          <a href="#">Visit Website</a>
        </div>
      </div>
    </div>
	
	<!-- Startup 3 -->
    <div class="startup-card">
      <img src="go.jpeg" alt="Startup 3" class="startup-logo" />
      <div class="startup-content">
        <div class="startup-name">Go Mechanic</div>
        <div class="startup-desc">
          A telehealth platform connecting rural patients with urban doctors via video consultation.
        </div>
        <div class="startup-link">
          <a href="#">Visit Website</a>
        </div>
      </div>
    </div>
	
	<!-- Startup 3 -->
    <div class="startup-card">
      <img src="urban.jpeg" alt="Startup 4" class="startup-logo" />
      <div class="startup-content">
        <div class="startup-name">Urban company</div>
        <div class="startup-desc">
          A telehealth platform connecting rural patients with urban doctors via video consultation.
        </div>
        <div class="startup-link">
          <a href="#">Visit Website</a>
        </div>
      </div>
    </div>

    <!-- Startup 4 -->
    <div class="startup-card">
      <img src="eco.jpeg" alt="Startup 4" class="startup-logo" />
      <div class="startup-content">
        <div class="startup-name">EcoBuild</div>
        <div class="startup-desc">
          Sustainable construction materials made from recycled plastic and organic waste.
        </div>
        <div class="startup-link">
          <a href="#">Visit Website</a>
        </div>
      </div>
    </div>
  </div>
</section>
<style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #000;
      color: #fff;
    }

    .events-section {
      padding: 4rem 10%;
      background-color: #0a0a0a;
      text-align: center;
    }

    .events-section h2 {
      font-size: 2.5rem;
      color: #ffff00;
      margin-bottom: 1rem;
    }

    .events-section p {
      font-size: 1.1rem;
      color: #ccc;
      margin-bottom: 3rem;
    }

    .events-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .event-card {
      background-color: #111;
      border-left: 4px solid #ffff00;
      border-radius: 8px;
      padding: 1.5rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: left;
    }

    .event-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(255, 255, 194);
    }

    .event-date {
      font-size: 0.9rem;
      color: #aaa;
      margin-bottom: 0.5rem;
    }

    .event-title {
      font-size: 1.3rem;
      color: #ffff00;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .event-desc {
      font-size: 0.95rem;
      color: #ccc;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .event-btn {
      display: inline-block;
      padding: 0.4rem 1rem;
      background-color: #ffff00;
      color: #000;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .event-btn:hover {
      background-color: #009acd;
    }

    @media (max-width: 768px) {
      .events-section {
        padding: 3rem 5%;
      }
    }
  </style>
</head>
<body>

<section class="events-section" id="events">
  <h2>Events & Announcements</h2>
  <p>Stay updated with our latest events, workshops, and important announcements.</p>

  <div class="events-grid">
    <!-- Event 1 -->
    <div class="event-card">
      <div class="event-date">April 28, 2025</div>
      <div class="event-title">Startup Demo Day</div>
      <div class="event-desc">
        Join us for a pitch showcase where our incubated startups present their ventures to investors and mentors.
      </div>
      <a href="#" class="event-btn">Register Now</a>
    </div>

    <!-- Event 2 -->
    <div class="event-card">
      <div class="event-date">May 10, 2025</div>
      <div class="event-title">AI & Innovation Workshop</div>
      <div class="event-desc">
        A hands-on workshop exploring the latest trends in AI-powered entrepreneurship and product development.
      </div>
      <a href="#" class="event-btn">Learn More</a>
    </div>

    <!-- Event 3 -->
    <div class="event-card">
      <div class="event-date">June 1, 2025</div>
      <div class="event-title">Incubation Program Cohort 2025</div>
      <div class="event-desc">
        Applications are open for our next incubation cohort. Get access to mentorship, funding, and office space.
      </div>
      <a href="#" class="event-btn">Apply Now</a>
    </div>
  </div>
</section>

<!-- JavaScript Placeholder (for filtering or dynamic loading in future) -->
<script>
  // You can later fetch events dynamically or add filters here
  console.log("Events section loaded!");
</script>

<style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #000;
      color: #fff;
    }

    .team-section {
      padding: 4rem 10%;
      background-color: #0a0a0a;
      text-align: center;
    }

    .team-section h2 {
      font-size: 2.5rem;
      color: #ffff00;
      margin-bottom: 1rem;
    }

    .team-section p {
      font-size: 1.1rem;
      color: #ccc;
      margin-bottom: 3rem;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 2rem;
    }

    .team-card {
      background-color: #111;
      border-radius: 10px;
      padding: 1.5rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
    }

    .team-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba( 255, 255, 194);
    }

    .team-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1rem;
      border: 3px solid #ffff00;
    }

    .team-name {
      font-size: 1.2rem;
      color: #ffff00;
      font-weight: bold;
      margin-bottom: 0.2rem;
    }

    .team-role {
      font-size: 0.95rem;
      color: #ccc;
      margin-bottom: 0.8rem;
    }

    .social-links a {
      color: #ffff00;
      text-decoration: none;
      margin: 0 0.5rem;
      font-size: 1.2rem;
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: #009acd;
    }

    @media (max-width: 768px) {
      .team-section {
        padding: 3rem 5%;
      }
    }
  </style>
</head>
<body>

<section class="team-section" id="team">
  <h2>Meet the Team & Mentors</h2>
  <p>Our passionate team and expert mentors who drive innovation, guidance, and growth.</p>

  <div class="team-grid">
    <!-- Member 1 -->
    <div class="team-card">
      <img src="p1.jpeg" alt="Team Member" class="team-img" />
      <div class="team-name">Dr. Asha Mehta</div>
      <div class="team-role">Chief Innovation Officer</div>
      <div class="social-links">
        <a href="#" title="LinkedIn">🔗</a>
        <a href="#" title="Twitter">🐦</a>
      </div>
    </div>

    <!-- Member 2 -->
    <div class="team-card">
      <img src="p2.jpeg" alt="Team Member" class="team-img" />
      <div class="team-name">Ravi Kapoor</div>
      <div class="team-role">Startup Mentor - Tech</div>
      <div class="social-links">
        <a href="#" title="LinkedIn">🔗</a>
        <a href="#" title="GitHub">💻</a>
      </div>
    </div>

    <!-- Member 3 -->
    <div class="team-card">
      <img src="p3.jpeg" alt="Team Member" class="team-img" />
      <div class="team-name">Neha Sharma</div>
      <div class="team-role">Program Manager</div>
      <div class="social-links">
        <a href="#" title="LinkedIn">🔗</a>
      </div>
    </div>

    <!-- Member 4 -->
    <div class="team-card">
      <img src="p4.jpeg" alt="Team Member" class="team-img" />
      <div class="team-name">Dr. Rajan Iyer</div>
      <div class="team-role">IP & Patents Advisor</div>
      <div class="social-links">
        <a href="#" title="LinkedIn">🔗</a>
        <a href="#" title="Email">✉️</a>
      </div>
	  
	 
  </div>
</section>

<!-- Optional: JavaScript for dynamic interactions in the future -->
<script>
  console.log("Team section ready. You can expand this with modals or filters.");
</script>

</body>
<style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #000;
      color: #fff;
    }

    .testimonials-section {
      padding: 4rem 10%;
      background-color: #0a0a0a;
    }

    .testimonials-section h2 {
      font-size: 2.5rem;
      color: #ffff00;
      text-align: center;
      margin-bottom: 1rem;
    }

    .testimonials-section p {
      font-size: 1.1rem;
      color: #ccc;
      text-align: center;
      margin-bottom: 3rem;
    }

    .testimonial-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: space-between;
    }

    .testimonial-card, .media-card {
      background-color: #111;
      border-radius: 10px;
      padding: 1.5rem;
      flex: 1 1 45%;
      min-width: 280px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-left: 4px solid #ffff00;
    }

    .testimonial-card:hover, .media-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(255, 255, 194);
    }

    .testimonial-quote {
      font-style: italic;
      color: #ccc;
      margin-bottom: 1rem;
    }

    .testimonial-author {
      font-weight: bold;
      color: #ffff00;
      font-size: 1rem;
    }

    .testimonial-role {
      font-size: 0.9rem;
      color: #aaa;
    }

    .media-logo {
      width: 100px;
      margin-bottom: 1rem;
    }

    .media-mention {
      color: #ccc;
      font-size: 0.95rem;
    }

    .media-link {
      display: inline-block;
      margin-top: 0.5rem;
      color: #00bfff;
      font-size: 0.9rem;
      text-decoration: none;
    }

    .media-link:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .testimonial-grid {
        flex-direction: column;
        align-items: center;
      }

      .testimonial-card, .media-card {
        width: 100%;
      }
    }
  </style>
</head>
<body>

<section class="testimonials-section" id="testimonials">
  <h2>Testimonials & Media Mentions</h2>
  <p>What our alumni, partners, and the press are saying about our impact.</p>

  <div class="testimonial-grid">
    <!-- Testimonial 1 -->
    <div class="testimonial-card">
      <p class="testimonial-quote">“Being part of this incubator turned my idea into a funded startup. The mentorship and networking were game changers.”</p>
      <div class="testimonial-author">Aman Joshi</div>
      <div class="testimonial-role">Founder, SmartFarm</div>
    </div>

    <!-- Media Mention 1 -->
    <div class="media-card">
      <img src="mock.jpeg" alt="Media Logo" class="media-logo" />
      <div class="media-mention">“This campus incubator is leading innovation in rural-tech and sustainability startups.”</div>
      <a href="#" class="media-link" target="_blank">Read Full Article</a>
    </div>

    <!-- Testimonial 2 -->
    <div class="testimonial-card">
      <p class="testimonial-quote">“The workshops and demo days gave us direct access to investors and early customers. I’d recommend it to every student founder.”</p>
      <div class="testimonial-author">Sneha Patel</div>
      <div class="testimonial-role">Co-founder, HealthLink</div>
    </div>

    <!-- Media Mention 2 -->
    <div class="media-card">
      <img src="mock1.jpeg" alt="Media Logo" class="media-logo" />
      <div class="media-mention">“Innovation & Incubation Foundation Club nurtures some of India’s most promising young entrepreneurs.”</div>
      <a href="#" class="media-link" target="_blank">Read More</a>
    </div>
  </div>
</section>

<!-- JavaScript Placeholder -->
<script>
  console.log("Testimonials & Media section ready. Add slider or fetch dynamic quotes here.");
</script>
<style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #000;
      color: #fff;
    }

    .contact-section {
      padding: 4rem 10%;
      background-color: #0a0a0a;
      text-align: center;
    }

    .contact-section h2 {
      font-size: 2.5rem;
      color: #00bfff;
      margin-bottom: 1rem;
    }

    .contact-section p {
      font-size: 1.1rem;
      color: #ccc;
      margin-bottom: 3rem;
    }

    .contact-form {
      max-width: 600px;
      margin: auto;
      text-align: left;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #ccc;
    }

    .form-group input, .form-group textarea {
      width: 100%;
      padding: 0.8rem;
      border: none;
      border-radius: 5px;
      background-color: #111;
      color: #fff;
      font-size: 1rem;
    }

    .form-group input:focus, .form-group textarea:focus {
      outline: 2px solid #00bfff;
    }

    .submit-btn {
      background-color: #00bfff;
      color: #000;
      padding: 0.8rem 2rem;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .submit-btn:hover {
      background-color: #009acd;
    }

    .footer {
      background-color: #111;
      padding: 2rem 10%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      color: #ccc;
    }

    .footer .footer-column {
      flex: 1 1 200px;
      margin: 1rem 0;
    }

    .footer .footer-column h4 {
      color: #00bfff;
      margin-bottom: 1rem;
    }

    .footer .footer-links a {
      display: block;
      color: #ccc;
      text-decoration: none;
      margin-bottom: 0.5rem;
      transition: color 0.3s ease;
    }

    .footer .footer-links a:hover {
      color: #00bfff;
    }

    .footer-bottom {
      text-align: center;
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #888;
    }

    @media (max-width: 768px) {
      .footer {
        flex-direction: column;
        text-align: center;
      }

      .contact-section {
        padding: 3rem 5%;
      }
    }
  </style>
</head>
<body>

<style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #000;
      color: #fff;
    }

    /* Contact Section */
    .contact-section {
      padding: 4rem 10%;
      background-color: #0a0a0a;
    }

    .contact-section h2 {
      font-size: 2.5rem;
      color: #00bfff;
      margin-bottom: 1rem;
      text-align: center;
    }

    .contact-section p {
      font-size: 1.1rem;
      color: #ccc;
      margin-bottom: 3rem;
      text-align: center;
    }

    .contact-container {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      align-items: flex-start;
      justify-content: center;
    }

    .contact-image {
      flex: 1 1 300px;
      text-align: center;
    }

    .contact-image img {
      width: 100%;
      max-width: 400px;
      border-radius: 50px;
	  margin-top: 1.2cm;
	  box-shadow: 0 0 30px rgba( 255, 255, 194);
    }

    .contact-form {
      flex: 1 1 400px;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #ccc;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.8rem;
      border: none;
      border-radius: 5px;
      background-color: #111;
      color: #fff;
      font-size: 1rem;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: 2px solid #00bfff;
    }

    .submit-btn {
      background-color: #00bfff;
      color: #000;
      padding: 0.8rem 2rem;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .submit-btn:hover {
      background-color: #009acd;
    }

    /* Footer */
    .footer {
      background-color: #111;
      padding: 2rem 10%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      color: #ccc;
    }

    .footer-column {
      flex: 1 1 200px;
      margin: 1rem 0;
    }

    .footer h4 {
      color: #00bfff;
      margin-bottom: 1rem;
    }

    .footer-links a {
      display: block;
      color: #ccc;
      text-decoration: none;
      margin-bottom: 0.5rem;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: #00bfff;
    }

    .footer-bottom {
      text-align: center;
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #888;
    }

    .map-container {
      width: 100%;
      height: 300px;
      margin-top: 2rem;
      border: none;
    }

    @media (max-width: 768px) {
      .contact-container {
        flex-direction: column;
        text-align: center;
      }

      .footer {
        flex-direction: column;
        text-align: center;
      }

      .map-container {
        height: 250px;
      }
    }
  </style>
</head>
<body>

<!-- Contact Section -->
<section class="contact-section" id="contact">
  <h2>Contact Us</h2>
  <p>Have a question, idea, or want to collaborate? We'd love to hear from you.</p>

  <div class="contact-container">
    <!-- Contact Image -->
    <div class="contact-image">
      <img src="contact.jpeg" alt="Contact Illustration" />
    </div>

    <!-- Contact Form -->
    <form class="contact-form" id="contactForm">
      <div class="form-group">
        <label for="name">Full Name *</label>
        <input type="text" id="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email Address *</label>
        <input type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="message">Message *</label>
        <textarea id="message" rows="5" required></textarea>
      </div>
      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>
</section>

<!-- Footer -->
<footer class="footer">
  <div class="footer-column">
    <h4>Innovation & Incubation Club</h4>
    <p>Empowering ideas. Enabling growth. Connecting futures.</p>
  </div>

  <div class="footer-column footer-links">
    <h4>Quick Links</h4>
    <a href="#about">About Us</a>
    <a href="#services">Services</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#events">Events</a>
  </div>

  <div class="footer-column">
    <h4>Contact Info</h4>
    <p>Email: contact@incubationclub.org</p>
    <p>Phone: +91-9876543210</p>
    <p>XYZ University, Innovation Block</p>
  </div>
</footer>



<!-- JS for basic validation -->
<script>
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
    } else if (!email.match(emailPattern)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you! Your message has been sent.');
      form.reset();
    }
  });
</script>










</body>
</html>
