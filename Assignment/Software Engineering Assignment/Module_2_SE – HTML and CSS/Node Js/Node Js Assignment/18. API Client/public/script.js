/**
 * Task 18: Professional API Client Engine
 * This script handles all API interactions, UI updates, and LocalStorage history.
 */

// 1. Core API Client Object (Requirement 1)
const apiClient = {
    // GET Method: Fetches data from a URL
    async getData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return { data, status: response.status, ok: response.ok };
    },

    // POST Method: Creates new data
    async postData(url, body) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });
        const data = await response.json();
        return { data, status: response.status, ok: response.ok };
    },

    // PUT Method: Updates existing data
    async putData(url, body) {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });
        const data = await response.json();
        return { data, status: response.status, ok: response.ok };
    },

    // DELETE Method: Removes data
    async deleteData(url) {
        const response = await fetch(url, { method: 'DELETE' });
        return { data: { message: "Resource Deleted Successfully" }, status: response.status, ok: response.ok };
    }
};

// --- UI Elements ---
const methodSelect = document.getElementById('methodSelect');
const urlInput = document.getElementById('urlInput');
const jsonInput = document.getElementById('jsonInput');
const sendBtn = document.getElementById('sendBtn');
const responseArea = document.getElementById('responseArea');
const statusBadge = document.getElementById('statusBadge');
const loader = document.getElementById('loader');
const historyList = document.getElementById('historyList');

// 2. Dynamic Behavior: Enable/Disable JSON Input based on Method (Requirement 4)
methodSelect.addEventListener('change', () => {
    const method = methodSelect.value;
    if (method === 'GET' || method === 'DELETE') {
        jsonInput.disabled = true;
        jsonInput.placeholder = "JSON Data not required for this method";
        jsonInput.value = "";
    } else {
        jsonInput.disabled = false;
        jsonInput.placeholder = '{"title": "foo", "body": "bar", "userId": 1}';
    }
});

// 3. Main Send Request Function (Requirement 3 & 5)
async function handleRequest() {
    const url = urlInput.value.trim();
    const method = methodSelect.value;
    let body = null;

    if (!url) return alert("Please enter an API URL");

    // JSON Validation for POST/PUT (Requirement 4)
    if (method === 'POST' || method === 'PUT') {
        try {
            body = JSON.parse(jsonInput.value || '{}');
        } catch (e) {
            return alert("Invalid JSON format! Please check your brackets and quotes.");
        }
    }

    // Show Loading (Requirement 5)
    loader.classList.remove('hidden');
    responseArea.innerText = "Processing request...";
    statusBadge.innerText = "PENDING";
    statusBadge.className = "badge pending";

    try {
        let result;
        // Use the apiClient methods based on selection
        switch(method) {
            case 'GET': result = await apiClient.getData(url); break;
            case 'POST': result = await apiClient.postData(url, body); break;
            case 'PUT': result = await apiClient.putData(url, body); break;
            case 'DELETE': result = await apiClient.deleteData(url); break;
        }

        // Display Result (Requirement 5)
        displayResponse(result);
        saveToHistory(method, url);

    } catch (error) {
        responseArea.innerText = "Error: " + error.message;
        statusBadge.innerText = "FAILED";
        statusBadge.className = "badge error";
    } finally {
        loader.classList.add('hidden');
    }
}

// 4. Helper: Format and Display JSON (Requirement 5)
function displayResponse(result) {
    statusBadge.innerText = `STATUS: ${result.status}`;
    statusBadge.className = result.ok ? "badge success" : "badge error";
    
    // Pretty Print JSON
    responseArea.innerText = JSON.stringify(result.data, null, 4);
}

// 5. Quick Test Buttons (Requirement 6)
function setQuickUrl(path) {
    urlInput.value = `https://jsonplaceholder.typicode.com${path}`;
}

// 6. Copy Response (Requirement 6)
function copyResponse() {
    navigator.clipboard.writeText(responseArea.innerText);
    alert("Response copied to clipboard!");
}

// 7. Clear Form (Requirement 6)
function resetForm() {
    urlInput.value = "";
    jsonInput.value = "";
    responseArea.innerText = "// Response will appear here...";
    statusBadge.innerText = "READY";
    statusBadge.className = "badge";
}

// 8. History Management (Bonus Requirement 10)
function saveToHistory(method, url) {
    let history = JSON.parse(localStorage.getItem('apiHistory') || '[]');
    history.unshift({ method, url, time: new Date().toLocaleTimeString() });
    history = history.slice(0, 5); // Keep last 5
    localStorage.setItem('apiHistory', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const history = JSON.parse(localStorage.getItem('apiHistory') || '[]');
    historyList.innerHTML = history.map(item => `
        <div class="history-item" onclick="urlInput.value='${item.url}'; methodSelect.value='${item.method}'">
            <strong>${item.method}</strong> ${item.url.split('.com')[1] || item.url}
        </div>
    `).join('');
}

// Event Listeners
sendBtn.addEventListener('click', handleRequest);
renderHistory();
