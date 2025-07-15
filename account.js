document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("loggedInUser");
    if (username) {
        document.getElementById("welcomeMsg").textContent = `Greetings, ${username}!`;
    }else {
        window.location.href = "index.html";
    }
});
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html"; 
}
function transfer_tab(tab_name){
   const account_summary_tab_element=document.getElementById('account_summary');
   const transfer_fund_tab_element = document.getElementById('transfer_fund')
   const accountSummaryContent = document.getElementById("account-summary-content");
   const transferFundContent = document.getElementById("transfer_fund_content");

   if (tab_name === "account_summary") {
       accountSummaryContent.style.display = "block";
       account_summary_tab_element.classList.add('active')
       transferFundContent.style.display = "none";
       transfer_fund_tab_element.classList.remove('active')
   } else if (tab_name === "transfer_fund") {
       accountSummaryContent.style.display = "none";
       transferFundContent.style.display = "block";
       account_summary_tab_element.classList.remove('active')
       transfer_fund_tab_element.classList.add('active')
   }
}
const viewStatement = (accountType) => {
  const statementModelElement = document.getElementById('statement');
  statementModelElement.style.display = 'flex';
};const closeStatement = ()=>{
  const statementModelElement = document.getElementById('statement')
  statementModelElement.style.display='none'
}
function money_transfer() {
    const amountelement = document.getElementById("amount");
    const amount = amountelement.value.trim();
    const accountTypeElement = document.getElementById("account-type");
    const accountType = accountTypeElement.value;
    const transferMessage = document.getElementById("transfer-message");
        transferMessage.textContent = `Transfer of Rs. ${amount} from your ${accountType} account is successful!`;
   
}
function resetForm() {
    document.getElementById("amount").value = "";
    document.getElementById("account-type").value = "";
    document.getElementById("beneficiary").value = "";
    document.getElementById("transfer-message").textContent = "";
     document.getElementById("remarks").value = "";
}