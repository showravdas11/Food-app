import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/aboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <CommonSection title="About-Us" />
      <div class="container">
        <h1 className="abutus_head">We're crazy about pizza.</h1>
        <p className="text-center about_descp">
          Piizalian, a division of Hot City Bakery, Inc., started in 1989 when a
          group of friends turned their passion for pizza into a business we’re
          still crazy about. We’ve evolved quite a bit since those first days
          when we focused solely on custom dough for a handful of customers.
          Over the course of several years, we expanded our expertise to answer
          customer requests for self-rising and par-baked crusts, and frozen
          dough balls.
        </p>
        <p className="text-center mt-4 about_descp">
          Today, Piizalian is the supplier of choice for restaurants, food
          service and manufacturers across the country, offering a full line of
          remarkably good pizza doughs – so good, in fact, that customers
          confidently stake their reputations on them.
        </p>
      </div>
      <div className="about_bg"></div>

      <div className="container-fluid about_info mb-5">
        <div className="row">
          <div className="col-md-6 col-12 p-4">
            <h3 className="mt-5 text-bold">OUR PROMISE</h3>
            <p className="mt-3">
              Consistent. Convenient. Cost-effective. You never have to wonder
              what to expect from Piizalian products because we work hard to
              make sure they perform to very high standards – and taste
              delicious – order after order after order.
            </p>

            <p className="mt-3">
              We manufacture with precision, and that means you get consistent
              product size, weight and performance every time We operate in
              accordance with strict food safety guidelines to ensure a quality
              product.
            </p>
            <div className="d-flex align-items-center ">
                <div>
                    <svg className="mt-4" xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 30 30" fill="none"><path d="M15.2404 0C15.0843 0 14.9282 0 14.7721 0C14.43 0.133225 14.2052 0.388525 14.008 0.689603C13.437 1.5629 12.8524 2.4274 12.2726 3.29483C12.0642 3.60706 11.8518 3.66106 11.509 3.49203C11.4304 3.4533 11.3518 3.41456 11.2731 3.37524C10.3922 2.93859 9.51129 2.50076 8.62979 2.06529C7.74007 1.62629 7.07102 1.99897 6.99942 2.98671C6.92489 4.01789 6.8662 5.05024 6.80751 6.08259C6.77582 6.64777 6.66666 6.76222 6.10736 6.7945C5.06505 6.85436 4.02333 6.91422 2.98161 6.98465C2.03673 7.04862 1.64293 7.73294 2.05903 8.57866C2.54028 9.55702 3.02739 10.533 3.51098 11.5102C3.68 11.8524 3.63012 12.0419 3.31907 12.2503C2.41116 12.8577 1.50208 13.4628 0.595341 14.0708C-0.203409 14.6067 -0.19754 15.3884 0.607664 15.926C1.50794 16.527 2.40881 17.1268 3.30909 17.7278C3.62366 17.9379 3.67472 18.1275 3.50805 18.4667C3.11659 19.2619 2.72162 20.0554 2.33193 20.8518C2.19108 21.14 2.03379 21.4241 1.9305 21.7263C1.74446 22.2715 2.11537 22.8596 2.68347 22.9576C2.83665 22.984 2.99276 23.0005 3.14829 23.0104C4.19001 23.0756 5.23173 23.136 6.27345 23.2018C6.58743 23.2217 6.7453 23.3767 6.78227 23.6918C6.79519 23.798 6.79988 23.9054 6.80634 24.0129C6.86913 25.0352 6.92137 26.0582 7.00118 27.0794C7.01761 27.293 7.0945 27.5243 7.2107 27.7038C7.4836 28.1252 8.00241 28.2232 8.51241 27.9744C9.52772 27.4791 10.5383 26.9743 11.5513 26.4755C11.8406 26.3329 12.0695 26.3962 12.2479 26.6633C12.8548 27.5712 13.4598 28.4809 14.0667 29.3882C14.6119 30.2034 15.3977 30.204 15.9424 29.3894C16.538 28.4973 17.132 27.6041 17.7265 26.7114C17.9507 26.3751 18.142 26.3252 18.5112 26.5077C19.4719 26.982 20.4314 27.4585 21.3922 27.9316C22.2666 28.3623 22.9351 27.9926 23.009 27.0207C23.0871 25.9895 23.144 24.9572 23.2027 23.9248C23.2356 23.3444 23.3441 23.2282 23.9158 23.1947C24.9481 23.1337 25.9798 23.0726 27.0122 23.0057C27.9729 22.9435 28.369 22.2598 27.9453 21.3982C27.4688 20.4281 26.9875 19.4603 26.5086 18.4913C26.3367 18.1427 26.3883 17.9391 26.7041 17.7284C27.5633 17.1538 28.4189 16.5745 29.2846 16.0093C29.5939 15.8075 29.8615 15.5809 30 15.2288C30 15.0727 30 14.9165 30 14.7604C29.8685 14.4165 29.6132 14.1917 29.3116 13.9951C28.4383 13.4247 27.5732 12.8419 26.7052 12.2632C26.3871 12.0513 26.3349 11.8459 26.5057 11.5014C26.9934 10.5154 27.477 9.52708 27.9694 8.54345C28.1695 8.14318 28.1895 7.75994 27.916 7.38843C27.6777 7.06447 27.3262 7.00167 26.957 6.97937C25.8959 6.91598 24.8348 6.85319 23.7737 6.78687C23.3823 6.76222 23.2338 6.61256 23.2103 6.22521C23.1651 5.47574 23.1241 4.72569 23.0777 3.97622C23.0536 3.58711 23.0437 3.19506 22.9903 2.81006C22.8776 2.00249 22.2232 1.65916 21.4849 2.01716C20.4778 2.50605 19.4772 3.00843 18.4736 3.50436C18.1643 3.65754 17.9425 3.60061 17.7535 3.31772C17.1684 2.44207 16.5797 1.56936 16.004 0.688429C15.808 0.387938 15.5832 0.132639 15.2404 0Z" fill="#C6202E"></path><path d="M9.5 15.25L13.9 19L20.5 11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                 <div className="mx-4 mt-4 ">Our facilities are regularly audited against the Global Food Safety Initiative Standard SQF (Safe Quality Food)</div>
            </div>
            <div className="d-flex align-items-center">
                <div>
                    <svg className="mt-4" xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 30 30" fill="none"><path d="M15.2404 0C15.0843 0 14.9282 0 14.7721 0C14.43 0.133225 14.2052 0.388525 14.008 0.689603C13.437 1.5629 12.8524 2.4274 12.2726 3.29483C12.0642 3.60706 11.8518 3.66106 11.509 3.49203C11.4304 3.4533 11.3518 3.41456 11.2731 3.37524C10.3922 2.93859 9.51129 2.50076 8.62979 2.06529C7.74007 1.62629 7.07102 1.99897 6.99942 2.98671C6.92489 4.01789 6.8662 5.05024 6.80751 6.08259C6.77582 6.64777 6.66666 6.76222 6.10736 6.7945C5.06505 6.85436 4.02333 6.91422 2.98161 6.98465C2.03673 7.04862 1.64293 7.73294 2.05903 8.57866C2.54028 9.55702 3.02739 10.533 3.51098 11.5102C3.68 11.8524 3.63012 12.0419 3.31907 12.2503C2.41116 12.8577 1.50208 13.4628 0.595341 14.0708C-0.203409 14.6067 -0.19754 15.3884 0.607664 15.926C1.50794 16.527 2.40881 17.1268 3.30909 17.7278C3.62366 17.9379 3.67472 18.1275 3.50805 18.4667C3.11659 19.2619 2.72162 20.0554 2.33193 20.8518C2.19108 21.14 2.03379 21.4241 1.9305 21.7263C1.74446 22.2715 2.11537 22.8596 2.68347 22.9576C2.83665 22.984 2.99276 23.0005 3.14829 23.0104C4.19001 23.0756 5.23173 23.136 6.27345 23.2018C6.58743 23.2217 6.7453 23.3767 6.78227 23.6918C6.79519 23.798 6.79988 23.9054 6.80634 24.0129C6.86913 25.0352 6.92137 26.0582 7.00118 27.0794C7.01761 27.293 7.0945 27.5243 7.2107 27.7038C7.4836 28.1252 8.00241 28.2232 8.51241 27.9744C9.52772 27.4791 10.5383 26.9743 11.5513 26.4755C11.8406 26.3329 12.0695 26.3962 12.2479 26.6633C12.8548 27.5712 13.4598 28.4809 14.0667 29.3882C14.6119 30.2034 15.3977 30.204 15.9424 29.3894C16.538 28.4973 17.132 27.6041 17.7265 26.7114C17.9507 26.3751 18.142 26.3252 18.5112 26.5077C19.4719 26.982 20.4314 27.4585 21.3922 27.9316C22.2666 28.3623 22.9351 27.9926 23.009 27.0207C23.0871 25.9895 23.144 24.9572 23.2027 23.9248C23.2356 23.3444 23.3441 23.2282 23.9158 23.1947C24.9481 23.1337 25.9798 23.0726 27.0122 23.0057C27.9729 22.9435 28.369 22.2598 27.9453 21.3982C27.4688 20.4281 26.9875 19.4603 26.5086 18.4913C26.3367 18.1427 26.3883 17.9391 26.7041 17.7284C27.5633 17.1538 28.4189 16.5745 29.2846 16.0093C29.5939 15.8075 29.8615 15.5809 30 15.2288C30 15.0727 30 14.9165 30 14.7604C29.8685 14.4165 29.6132 14.1917 29.3116 13.9951C28.4383 13.4247 27.5732 12.8419 26.7052 12.2632C26.3871 12.0513 26.3349 11.8459 26.5057 11.5014C26.9934 10.5154 27.477 9.52708 27.9694 8.54345C28.1695 8.14318 28.1895 7.75994 27.916 7.38843C27.6777 7.06447 27.3262 7.00167 26.957 6.97937C25.8959 6.91598 24.8348 6.85319 23.7737 6.78687C23.3823 6.76222 23.2338 6.61256 23.2103 6.22521C23.1651 5.47574 23.1241 4.72569 23.0777 3.97622C23.0536 3.58711 23.0437 3.19506 22.9903 2.81006C22.8776 2.00249 22.2232 1.65916 21.4849 2.01716C20.4778 2.50605 19.4772 3.00843 18.4736 3.50436C18.1643 3.65754 17.9425 3.60061 17.7535 3.31772C17.1684 2.44207 16.5797 1.56936 16.004 0.688429C15.808 0.387938 15.5832 0.132639 15.2404 0Z" fill="#C6202E"></path><path d="M9.5 15.25L13.9 19L20.5 11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                 <div className="mx-4 mt-4">We employ the HACCP (Hazard Analysis and Critical Control Points) system to ensure the integrity of our</div>
            </div>
            <div className="d-flex align-items-center">
                <div>
                    <svg className="mt-4" xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 30 30" fill="none"><path d="M15.2404 0C15.0843 0 14.9282 0 14.7721 0C14.43 0.133225 14.2052 0.388525 14.008 0.689603C13.437 1.5629 12.8524 2.4274 12.2726 3.29483C12.0642 3.60706 11.8518 3.66106 11.509 3.49203C11.4304 3.4533 11.3518 3.41456 11.2731 3.37524C10.3922 2.93859 9.51129 2.50076 8.62979 2.06529C7.74007 1.62629 7.07102 1.99897 6.99942 2.98671C6.92489 4.01789 6.8662 5.05024 6.80751 6.08259C6.77582 6.64777 6.66666 6.76222 6.10736 6.7945C5.06505 6.85436 4.02333 6.91422 2.98161 6.98465C2.03673 7.04862 1.64293 7.73294 2.05903 8.57866C2.54028 9.55702 3.02739 10.533 3.51098 11.5102C3.68 11.8524 3.63012 12.0419 3.31907 12.2503C2.41116 12.8577 1.50208 13.4628 0.595341 14.0708C-0.203409 14.6067 -0.19754 15.3884 0.607664 15.926C1.50794 16.527 2.40881 17.1268 3.30909 17.7278C3.62366 17.9379 3.67472 18.1275 3.50805 18.4667C3.11659 19.2619 2.72162 20.0554 2.33193 20.8518C2.19108 21.14 2.03379 21.4241 1.9305 21.7263C1.74446 22.2715 2.11537 22.8596 2.68347 22.9576C2.83665 22.984 2.99276 23.0005 3.14829 23.0104C4.19001 23.0756 5.23173 23.136 6.27345 23.2018C6.58743 23.2217 6.7453 23.3767 6.78227 23.6918C6.79519 23.798 6.79988 23.9054 6.80634 24.0129C6.86913 25.0352 6.92137 26.0582 7.00118 27.0794C7.01761 27.293 7.0945 27.5243 7.2107 27.7038C7.4836 28.1252 8.00241 28.2232 8.51241 27.9744C9.52772 27.4791 10.5383 26.9743 11.5513 26.4755C11.8406 26.3329 12.0695 26.3962 12.2479 26.6633C12.8548 27.5712 13.4598 28.4809 14.0667 29.3882C14.6119 30.2034 15.3977 30.204 15.9424 29.3894C16.538 28.4973 17.132 27.6041 17.7265 26.7114C17.9507 26.3751 18.142 26.3252 18.5112 26.5077C19.4719 26.982 20.4314 27.4585 21.3922 27.9316C22.2666 28.3623 22.9351 27.9926 23.009 27.0207C23.0871 25.9895 23.144 24.9572 23.2027 23.9248C23.2356 23.3444 23.3441 23.2282 23.9158 23.1947C24.9481 23.1337 25.9798 23.0726 27.0122 23.0057C27.9729 22.9435 28.369 22.2598 27.9453 21.3982C27.4688 20.4281 26.9875 19.4603 26.5086 18.4913C26.3367 18.1427 26.3883 17.9391 26.7041 17.7284C27.5633 17.1538 28.4189 16.5745 29.2846 16.0093C29.5939 15.8075 29.8615 15.5809 30 15.2288C30 15.0727 30 14.9165 30 14.7604C29.8685 14.4165 29.6132 14.1917 29.3116 13.9951C28.4383 13.4247 27.5732 12.8419 26.7052 12.2632C26.3871 12.0513 26.3349 11.8459 26.5057 11.5014C26.9934 10.5154 27.477 9.52708 27.9694 8.54345C28.1695 8.14318 28.1895 7.75994 27.916 7.38843C27.6777 7.06447 27.3262 7.00167 26.957 6.97937C25.8959 6.91598 24.8348 6.85319 23.7737 6.78687C23.3823 6.76222 23.2338 6.61256 23.2103 6.22521C23.1651 5.47574 23.1241 4.72569 23.0777 3.97622C23.0536 3.58711 23.0437 3.19506 22.9903 2.81006C22.8776 2.00249 22.2232 1.65916 21.4849 2.01716C20.4778 2.50605 19.4772 3.00843 18.4736 3.50436C18.1643 3.65754 17.9425 3.60061 17.7535 3.31772C17.1684 2.44207 16.5797 1.56936 16.004 0.688429C15.808 0.387938 15.5832 0.132639 15.2404 0Z" fill="#C6202E"></path><path d="M9.5 15.25L13.9 19L20.5 11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                 <div className="mx-4 mt-4">We employ the HACCP (Hazard Analysis and Critical Control Points)</div>
            </div>
            <div className="d-flex align-items-center">
                <div>
                    <svg className="mt-4" xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 30 30" fill="none"><path d="M15.2404 0C15.0843 0 14.9282 0 14.7721 0C14.43 0.133225 14.2052 0.388525 14.008 0.689603C13.437 1.5629 12.8524 2.4274 12.2726 3.29483C12.0642 3.60706 11.8518 3.66106 11.509 3.49203C11.4304 3.4533 11.3518 3.41456 11.2731 3.37524C10.3922 2.93859 9.51129 2.50076 8.62979 2.06529C7.74007 1.62629 7.07102 1.99897 6.99942 2.98671C6.92489 4.01789 6.8662 5.05024 6.80751 6.08259C6.77582 6.64777 6.66666 6.76222 6.10736 6.7945C5.06505 6.85436 4.02333 6.91422 2.98161 6.98465C2.03673 7.04862 1.64293 7.73294 2.05903 8.57866C2.54028 9.55702 3.02739 10.533 3.51098 11.5102C3.68 11.8524 3.63012 12.0419 3.31907 12.2503C2.41116 12.8577 1.50208 13.4628 0.595341 14.0708C-0.203409 14.6067 -0.19754 15.3884 0.607664 15.926C1.50794 16.527 2.40881 17.1268 3.30909 17.7278C3.62366 17.9379 3.67472 18.1275 3.50805 18.4667C3.11659 19.2619 2.72162 20.0554 2.33193 20.8518C2.19108 21.14 2.03379 21.4241 1.9305 21.7263C1.74446 22.2715 2.11537 22.8596 2.68347 22.9576C2.83665 22.984 2.99276 23.0005 3.14829 23.0104C4.19001 23.0756 5.23173 23.136 6.27345 23.2018C6.58743 23.2217 6.7453 23.3767 6.78227 23.6918C6.79519 23.798 6.79988 23.9054 6.80634 24.0129C6.86913 25.0352 6.92137 26.0582 7.00118 27.0794C7.01761 27.293 7.0945 27.5243 7.2107 27.7038C7.4836 28.1252 8.00241 28.2232 8.51241 27.9744C9.52772 27.4791 10.5383 26.9743 11.5513 26.4755C11.8406 26.3329 12.0695 26.3962 12.2479 26.6633C12.8548 27.5712 13.4598 28.4809 14.0667 29.3882C14.6119 30.2034 15.3977 30.204 15.9424 29.3894C16.538 28.4973 17.132 27.6041 17.7265 26.7114C17.9507 26.3751 18.142 26.3252 18.5112 26.5077C19.4719 26.982 20.4314 27.4585 21.3922 27.9316C22.2666 28.3623 22.9351 27.9926 23.009 27.0207C23.0871 25.9895 23.144 24.9572 23.2027 23.9248C23.2356 23.3444 23.3441 23.2282 23.9158 23.1947C24.9481 23.1337 25.9798 23.0726 27.0122 23.0057C27.9729 22.9435 28.369 22.2598 27.9453 21.3982C27.4688 20.4281 26.9875 19.4603 26.5086 18.4913C26.3367 18.1427 26.3883 17.9391 26.7041 17.7284C27.5633 17.1538 28.4189 16.5745 29.2846 16.0093C29.5939 15.8075 29.8615 15.5809 30 15.2288C30 15.0727 30 14.9165 30 14.7604C29.8685 14.4165 29.6132 14.1917 29.3116 13.9951C28.4383 13.4247 27.5732 12.8419 26.7052 12.2632C26.3871 12.0513 26.3349 11.8459 26.5057 11.5014C26.9934 10.5154 27.477 9.52708 27.9694 8.54345C28.1695 8.14318 28.1895 7.75994 27.916 7.38843C27.6777 7.06447 27.3262 7.00167 26.957 6.97937C25.8959 6.91598 24.8348 6.85319 23.7737 6.78687C23.3823 6.76222 23.2338 6.61256 23.2103 6.22521C23.1651 5.47574 23.1241 4.72569 23.0777 3.97622C23.0536 3.58711 23.0437 3.19506 22.9903 2.81006C22.8776 2.00249 22.2232 1.65916 21.4849 2.01716C20.4778 2.50605 19.4772 3.00843 18.4736 3.50436C18.1643 3.65754 17.9425 3.60061 17.7535 3.31772C17.1684 2.44207 16.5797 1.56936 16.004 0.688429C15.808 0.387938 15.5832 0.132639 15.2404 0Z" fill="#C6202E"></path><path d="M9.5 15.25L13.9 19L20.5 11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                 <div className="mx-4 mt-4">We audit and test each shift on a daily basis</div>
            </div>
            <div className="d-flex align-items-center">
                <div>
                    <svg className="mt-4" xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 30 30" fill="none"><path d="M15.2404 0C15.0843 0 14.9282 0 14.7721 0C14.43 0.133225 14.2052 0.388525 14.008 0.689603C13.437 1.5629 12.8524 2.4274 12.2726 3.29483C12.0642 3.60706 11.8518 3.66106 11.509 3.49203C11.4304 3.4533 11.3518 3.41456 11.2731 3.37524C10.3922 2.93859 9.51129 2.50076 8.62979 2.06529C7.74007 1.62629 7.07102 1.99897 6.99942 2.98671C6.92489 4.01789 6.8662 5.05024 6.80751 6.08259C6.77582 6.64777 6.66666 6.76222 6.10736 6.7945C5.06505 6.85436 4.02333 6.91422 2.98161 6.98465C2.03673 7.04862 1.64293 7.73294 2.05903 8.57866C2.54028 9.55702 3.02739 10.533 3.51098 11.5102C3.68 11.8524 3.63012 12.0419 3.31907 12.2503C2.41116 12.8577 1.50208 13.4628 0.595341 14.0708C-0.203409 14.6067 -0.19754 15.3884 0.607664 15.926C1.50794 16.527 2.40881 17.1268 3.30909 17.7278C3.62366 17.9379 3.67472 18.1275 3.50805 18.4667C3.11659 19.2619 2.72162 20.0554 2.33193 20.8518C2.19108 21.14 2.03379 21.4241 1.9305 21.7263C1.74446 22.2715 2.11537 22.8596 2.68347 22.9576C2.83665 22.984 2.99276 23.0005 3.14829 23.0104C4.19001 23.0756 5.23173 23.136 6.27345 23.2018C6.58743 23.2217 6.7453 23.3767 6.78227 23.6918C6.79519 23.798 6.79988 23.9054 6.80634 24.0129C6.86913 25.0352 6.92137 26.0582 7.00118 27.0794C7.01761 27.293 7.0945 27.5243 7.2107 27.7038C7.4836 28.1252 8.00241 28.2232 8.51241 27.9744C9.52772 27.4791 10.5383 26.9743 11.5513 26.4755C11.8406 26.3329 12.0695 26.3962 12.2479 26.6633C12.8548 27.5712 13.4598 28.4809 14.0667 29.3882C14.6119 30.2034 15.3977 30.204 15.9424 29.3894C16.538 28.4973 17.132 27.6041 17.7265 26.7114C17.9507 26.3751 18.142 26.3252 18.5112 26.5077C19.4719 26.982 20.4314 27.4585 21.3922 27.9316C22.2666 28.3623 22.9351 27.9926 23.009 27.0207C23.0871 25.9895 23.144 24.9572 23.2027 23.9248C23.2356 23.3444 23.3441 23.2282 23.9158 23.1947C24.9481 23.1337 25.9798 23.0726 27.0122 23.0057C27.9729 22.9435 28.369 22.2598 27.9453 21.3982C27.4688 20.4281 26.9875 19.4603 26.5086 18.4913C26.3367 18.1427 26.3883 17.9391 26.7041 17.7284C27.5633 17.1538 28.4189 16.5745 29.2846 16.0093C29.5939 15.8075 29.8615 15.5809 30 15.2288C30 15.0727 30 14.9165 30 14.7604C29.8685 14.4165 29.6132 14.1917 29.3116 13.9951C28.4383 13.4247 27.5732 12.8419 26.7052 12.2632C26.3871 12.0513 26.3349 11.8459 26.5057 11.5014C26.9934 10.5154 27.477 9.52708 27.9694 8.54345C28.1695 8.14318 28.1895 7.75994 27.916 7.38843C27.6777 7.06447 27.3262 7.00167 26.957 6.97937C25.8959 6.91598 24.8348 6.85319 23.7737 6.78687C23.3823 6.76222 23.2338 6.61256 23.2103 6.22521C23.1651 5.47574 23.1241 4.72569 23.0777 3.97622C23.0536 3.58711 23.0437 3.19506 22.9903 2.81006C22.8776 2.00249 22.2232 1.65916 21.4849 2.01716C20.4778 2.50605 19.4772 3.00843 18.4736 3.50436C18.1643 3.65754 17.9425 3.60061 17.7535 3.31772C17.1684 2.44207 16.5797 1.56936 16.004 0.688429C15.808 0.387938 15.5832 0.132639 15.2404 0Z" fill="#C6202E"></path><path d="M9.5 15.25L13.9 19L20.5 11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                 <div className="mx-4 mt-4">Ingredients are tested for purity before use</div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <img className="about_info_img" src="https://i.ibb.co/vQPz6Tv/about-img-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;