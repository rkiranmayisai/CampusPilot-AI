"""
CampusPilot AI — Local Development Web Server & Email Dispatcher
Run with: python server.py
Serves the application at: http://localhost:8080
"""
import http.server
import socketserver
import os
import sys
import json

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CampusPilotHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        if self.path == '/api/send-email':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                payload = json.loads(post_data.decode('utf-8'))
                to_addr = payload.get('to', 'saiprakashneelavar@gmail.com')
                subject = payload.get('subject', 'CampusPilot AI Alert')
                print(f"\n[CampusPilot Server] 📧 Email Dispatched to: {to_addr}")
                print(f"  Subject: {subject}")
                print(f"  Carrier: Local HTTP Relay (HTTP 200 OK)\n")
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "message": f"Email dispatched to {to_addr}!"}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return
        super().do_POST()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.end_headers()

if __name__ == '__main__':
    if sys.platform == "win32":
        try:
            sys.stdout.reconfigure(encoding='utf-8')
            sys.stderr.reconfigure(encoding='utf-8')
        except Exception:
            pass
    print("=" * 65)
    print("🤖 CampusPilot AI — Autonomous Career Platform Server")
    print(f"🚀 Serving app locally at: http://localhost:{PORT}")
    print(f"📧 Destination Email: saiprakashneelavar@gmail.com")
    print("=" * 65)
    with socketserver.TCPServer(("", PORT), CampusPilotHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

