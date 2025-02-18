# **NestJS eSign Workflow**

## **Overview**
This project is a **NestJS-based eSign workflow application** that allows users to:
- Upload and store PDF files.
- Add eSign tags using **OpenSignLabs API**.
- Submit documents for eSign in a **sequential workflow** (Role 1 → Role 2 → Role 3).

## **Features**
✅ Upload and store PDFs.
✅ Add eSign tags dynamically.
✅ Integrate with OpenSignLabs API.
✅ Submit PDF for signing.
✅ Secure API with token authentication.
✅ Environment variable support.
✅ Error handling and logging.
✅ Unit test cases.

## **Technologies Used**
- **NestJS** (Backend Framework)
- **Multer** (File Uploads)
- **Axios** (HTTP Requests)
- **TypeORM** (Database)
- **SQLite** (Database Storage, can be replaced with MongoDB/PostgreSQL)

## **Project Setup**

### **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/esign-workflow.git
cd esign-workflow
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Create a `.env` File**
Create a `.env` file in the project root and add:
```ini
OPENSIGNLABS_API_TOKEN=<your token>
```

### **4. Run the Application**
```sh
npm run start
```
For development mode (auto-restart on changes):
```sh
npm run start:dev
```

## **API Endpoints**

### **1. Upload PDF**
- **Method:** `POST`
- **URL:** `http://localhost:3000/pdf/upload`
- **Body:**
  - Form-data: `file` (Upload a PDF file)

#### **Response:**
```json
{
  "message": "File uploaded successfully!",
  "filePath": "uploads/file-1234567890.pdf"
}
```

---

### **2. Add eSign Tag**
- **Method:** `POST`
- **URL:** `http://localhost:3000/sign/add`
- **Body:** (JSON)
```json
{
  "filePath": "uploads/file-1234567890.pdf",
  "role": "Role1",
  "email": "role1@example.com"
}
```

#### **Response:**
```json
{
  "status": "success",
  "message": "eSign tag added successfully!"
}
```

---

### **3. Submit for eSign**
- **Method:** `POST`
- **URL:** `http://localhost:3000/sign/submit`
- **Body:** (JSON)
```json
{
  "filePath": "uploads/file-1234567890.pdf"
}
```

#### **Response:**
```json
{
  "status": "success",
  "message": "PDF submitted for eSign!"
}
```

---

## **Project Structure**
```
esign-workflow/
│── src/
│   ├── modules/
│   │   ├── pdf/
│   │   │   ├── pdf.controller.ts
│   │   │   ├── pdf.service.ts
│   │   │   ├── pdf.module.ts
│   │   ├── sign/
│   │   │   ├── sign.controller.ts
│   │   │   ├── sign.service.ts
│   │   │   ├── sign.module.ts
│   ├── main.ts
│── uploads/  (To store PDFs)
│── .env
│── package.json
│── README.md
```