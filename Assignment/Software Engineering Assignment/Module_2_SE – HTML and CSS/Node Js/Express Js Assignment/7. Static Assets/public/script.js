document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('nexusBtn');
    
    console.log("🚀 [SCRIPT_JS] Asset Nexus logic initialized.");

    btn.addEventListener('click', () => {
        const timestamp = new Date().toLocaleTimeString();
        btn.innerText = `PING_RECEIVED_AT_${timestamp}`;
        btn.style.background = "#fff";
        btn.style.color = "#000";
        
        console.log(`📡 [STATIC_INTERACTION] Asset ping triggered at ${timestamp}`);
        
        setTimeout(() => {
            btn.innerText = "INITIALIZE_ASSET_PING";
            btn.style.background = "var(--accent)";
            btn.style.color = "#fff";
        }, 2000);
    });
});
