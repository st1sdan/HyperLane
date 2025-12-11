class THeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <a href="#" style="font-weight:800; font-size:1.5rem; text-decoration:none; color:white; letter-spacing:-1px;">
                    HYPER<span style="color:var(--accent)">LANE</span>
                </a>
                <!-- Навигация с Media и Team -->
                <div style="display:flex; gap:32px; align-items:center;">
                    <a href="#about" style="text-decoration:none; color:white; font-size:0.9rem; font-family:var(--font-mono);">ABOUT</a>
                    <a href="#media" style="text-decoration:none; color:white; font-size:0.9rem; font-family:var(--font-mono);">MEDIA</a>
                    <a href="#features" style="text-decoration:none; color:white; font-size:0.9rem; font-family:var(--font-mono);">SYSTEMS</a>
                    <a href="#roadmap" style="text-decoration:none; color:white; font-size:0.9rem; font-family:var(--font-mono);">ROADMAP</a>
                    <a href="#team" style="text-decoration:none; color:white; font-size:0.9rem; font-family:var(--font-mono);">TEAM</a>
                    
                    <a href="#download" class="btn" style="padding: 10px 24px; font-size: 0.8rem;">
                        DEMO
                    </a>
                </div>
            </nav>
        `;
    }
}
customElements.define("t-header", THeader);
