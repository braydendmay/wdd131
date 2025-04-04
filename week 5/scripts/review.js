
function getCurrentYear() {
    return new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", function() {
    var yearSpan = document.querySelector("#year span.highlight");
    if (yearSpan) {
		yearSpan.textContent = getCurrentYear();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = document.lastModified;

    var modifiedParagraph = document.querySelector("footer p:nth-of-type(2)");
    if (modifiedParagraph) {
        modifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
    }
});

const products = [
    {
      id: "fc-1888",
      name: "2k Diamond",
      avgRating: 4.8
    },
    {
      id: "fc-2050",
      name: "Gaming headset",
      avgRating: 4.9
    },
    {
      id: "fs-1987",
      name: "Time Machine",
      avgRating: 0.1
    },
    {
      id: "ac-2000",
      name: "Mona Lisa",
      avgRating: 5.0
    },
    {
      id: "jj-1969",
      name: "DeLorean",
      avgRating: 5.0
    }
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    const productSelect = document.querySelector('select[name="product"]');
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  
    const form = document.querySelector('form.wf1');
    form.addEventListener('submit', function(event) {
      let reviewCount = localStorage.getItem('reviewCount') || 0;
      reviewCount = parseInt(reviewCount) + 1;
      localStorage.setItem('reviewCount', reviewCount);
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    var yearSpan = document.querySelector("#year span.highlight");
    if (yearSpan) {
        yearSpan.textContent = getCurrentYear();
    }

    var lastModifiedDate = document.lastModified;
    var modifiedParagraph = document.querySelector("footer p:nth-of-type(2)");
    if (modifiedParagraph) {
        modifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
    }

    const form = document.querySelector('form.wf1');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let reviewCount = localStorage.getItem('reviewCount');
        reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
        localStorage.setItem('reviewCount', reviewCount);

        alert(`Thank you for your review! You have submitted ${reviewCount} reviews.`);

        form.reset();
    });
});

function getCurrentYear() {
    return new Date().getFullYear();
}