//toggle options
const options = document.querySelectorAll(".order__options");
const sectionTitles = document.querySelectorAll(".section__title");

// show selections based on title click
sectionTitles.forEach((title, index) => {
  title.addEventListener("click", function () {
    options[index].classList.toggle("hide");

    console.log(options, "options");
  });
});

//sidebar content

const sidebarOptions = document.querySelectorAll(".sidebar-option");

sidebarOptions.forEach((sidebarOption, index) => {
  sidebarOption.addEventListener("click", function () {
    //toggle option hide class
    options[index].classList.toggle("hide");

    //toggle active class on sidebar option
    sidebarOption.classList.toggle("active");
  });
});

let selectedOptions = {
  preference: "_____",
  beanType: "_____",
  quantity: "_____",
  grind: "_____",
  delivery: "_____",
};

//update the summary text

function updateSummaryText() {
  const summaryText = document.querySelector(".summary-text");

  const isCapsule = selectedOptions.preference === "Capsule";

  if (isCapsule) {
    summaryText.innerHTML = `"I drink my coffee as <span>${selectedOptions.preference}</span>, with a <span>${selectedOptions.beanType}</span>. <span>${selectedOptions.quantity}</span>, sent to me <span>${selectedOptions.delivery}</span>."`;
  } else {
    summaryText.innerHTML = `"I drink my coffee as <span>${selectedOptions.preference}</span>, with a <span>${selectedOptions.beanType}</span>. <span>${selectedOptions.quantity}</span> ground ala <span>${selectedOptions.grind}</span>, sent to me <span>${selectedOptions.delivery}</span>."`;
  }
}
document.querySelectorAll(".subscription-card").forEach((card) => {
  card.addEventListener("click", function () {
    const cardHeader = this.querySelector(".order-header").textContent;
    const parentItem = this.closest(".coffee-picking-step-container");
    // Remove active class from siblings

    parentItem.querySelectorAll(".subscription-card").forEach((sibling) => {
      //remove the active class on other siblings
      sibling.classList.remove("active");
    });

    // Add active class to clicked option
    this.classList.add("active");

    // Update selected options based on the index
    const parentIndex = Array.from(parentItem.parentElement.children).indexOf(
      parentItem
    );

    switch (parentIndex) {
      case 0:
        selectedOptions.preference = cardHeader;
        break;
      case 1:
        selectedOptions.beanType = cardHeader;
        break;
      case 2:
        selectedOptions.quantity = cardHeader;
        break;
      case 3:
        selectedOptions.grind = cardHeader;
        break;
      case 4:
        selectedOptions.delivery = cardHeader;
        break;
    }

    updateSummaryText();

    isSelectionsComplete();
  });
});

//

// Subscription Modal

const modalOpenBtn = document.querySelector(".create-plan-btn");
const modal = document.querySelector(".modal");
const closeModalbtn = document.querySelector(".close-modal-btn");

modalOpenBtn.addEventListener("click", () => {
  modal.showModal();
});

closeModalbtn.addEventListener("click", () => {
  modal.close();
});

function isSelectionsComplete() {
  const finalCheck = Object.values(selectedOptions).every(
    (value) => value !== "_____"
  );

  if (finalCheck) {
    console.log(finalCheck);
    console.log("all complete");
    // allow user to open modal
    modalOpenBtn.classList.remove("disabled");

    // update modal message
    let modalMessage = document.querySelector(".modal-content");
    modalMessage.innerHTML = `I drink my coffee as ${selectedOptions.preference}, with a
                      <span>${selectedOptions.beanType}</span> type of bean. <span>${selectedOptions.grind}</span> ground
                      ala <span>${selectedOptions.quantity}</span>, sent to me <span>${selectedOptions.delivery}</span>.`;
  }
}
