var agentShiftOptions = [
    "WO",
    "6:30 am to 3:30 pm",
    "8:30 am to 5:30 pm",
    "9:00 am to 6:00 pm",
    "10:00 am to 7:00 pm",
    "11:00 am to 8:00 pm",
    "2:30 pm to 11:30 pm",
    "09:30 pm to 6:30 am"
];

// Populate Agent Shift Options
var shiftOptionsDatalist = document.getElementById("agentShiftOptions");
agentShiftOptions.forEach(function(option) {
    var optionElement = document.createElement("option");
    optionElement.value = option;
    shiftOptionsDatalist.appendChild(optionElement);
});

function populateAgentNames() {
    var agent1Name1Value = document.getElementById("agent1Name1").value;
    var agent2Name1Value = document.getElementById("agent2Name1").value;
    
    document.getElementById("agent1Name2").value = agent1Name1Value;
    document.getElementById("agent2Name2").value = agent2Name1Value;
}

function validateAndPerformSwap() {
    var allInputs = document.querySelectorAll('input[type="text"], input[type="date"]');
    var isValid = true;

    allInputs.forEach(function(input) {
        if (input.value.trim() === '') {
            isValid = false;
        }
    });

    if (!isValid) {
        alert("Please fill in all fields before performing the swap.");
        return;
    }

    performShiftSwap();
}

function performShiftSwap() {
    var loadingOverlay = document.querySelector('.loading-overlay');
    loadingOverlay.style.display = 'flex';

    setTimeout(function() {
        var date1 = document.getElementById("date1").value.split('-').reverse().join('/');
        var agent1Name1 = document.getElementById("agent1Name1").value;
        var agent1Shift1 = document.getElementById("agent1Shift1").value;
        var agent2Name1 = document.getElementById("agent2Name1").value;
        var agent2Shift1 = document.getElementById("agent2Shift1").value;
        
        var date2 = document.getElementById("date2").value.split('-').reverse().join('/');
        var agent1Name2 = document.getElementById("agent1Name2").value;
        var agent1Shift2 = document.getElementById("agent1Shift2").value;
        var agent2Name2 = document.getElementById("agent2Name2").value;
        var agent2Shift2 = document.getElementById("agent2Shift2").value;

        var reason = document.getElementById("reason").value;
        
        var outputDiv = document.getElementById("output");
        
        // Subject
        var subject = "<strong>Subject</strong>: " + "Week off Swap with " + agent2Name1 + " on " + date1 + " and " + date2 + ".<br><br><hr>";
        
        // Before swap details
        var beforeSwapOutput = "<strong>Before Swap:</strong><br><br>" +
                            date1 + ":<br>" +
                            agent1Name1 + ": " + agent1Shift1 + "<br>" +
                            agent2Name1 + ": " + agent2Shift1 + "<br><br>" +
                            date2 + ":<br>" +
                            agent1Name2 + ": " + agent1Shift2 + "<br>" +
                            agent2Name2 + ": " + agent2Shift2 + "<br><br>";
        
        // After swap details
        var afterSwapOutput = "<strong>After Swap:</strong><br><br>" +
                        date1 + ":<br>" +
                        agent1Name1 + ": " + agent2Shift1 + "<br>" +
                        agent2Name1 + ": " + agent1Shift1 + "<br><br>" +
                        date2 + ":<br>" +
                        agent1Name2 + ": "  + agent2Shift2 + "<br>" +
                        agent2Name2 + ": "  + agent1Shift2 + "<br><br>";
        
        // Reason
        var reasonOutput = "<strong>Reason</strong>: " + reason + "<br><br>";
        
        // Approval message
        var approvalMessage = "Please approve the swap.<br>Thank you,<br>Regards";
        
        // Displaying the subject, before and after swap details, reason, and approval message
        outputDiv.innerHTML = subject + beforeSwapOutput + afterSwapOutput + reasonOutput + approvalMessage;

        // Hide loading overlay after processing is complete
        loadingOverlay.style.display = 'none';
    }, 1000); // 2-second delay
}
