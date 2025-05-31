# 🐝 BeeTrail Backend

## What is this project?

This backend supports the BeeTrail Field Logger app. It helps beekeepers log hive placements and find nearby crops that need pollination.

It stores hive logs, manages crop flowering calendars, and helps find crops close to a location that are currently flowering.

---

## Tech stack

- Node.js with Express  
- MongoDB

---

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local or Atlas)
- **Postman** (optional, for testing APIs)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bee-trail-backend.git
cd bee-trail-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the root folder and add the following:

```bash
PORT=8000
MONGODB_URI=mongodb://localhost:27017/beetrail-backend

Replace the MONGODB_URI with your own MongoDB connection string if needed.
```
### 4. Start the server

```bash
npm start
```

## APIs

### 1. Add Hive Log  
**POST** `/api/hives`

Add a new hive placement log.

**Request body:**

```json
{
  "hiveId": "HIVE0012",
  "datePlaced": "2025-04-08",
  "latitude": 77,
  "longitude": 77.1025,
  "numColonies": 5
}
```
**Response body:**

```json
{
    "hiveId": "HIVE0012",
    "datePlaced": "2025-04-08T00:00:00.000Z",
    "latitude": 77,
    "longitude": 77.1025,
    "numColonies": 5,
    "_id": "683acb20345deb193c031dc7",
    "createdAt": "2025-05-31T09:25:52.673Z",
    "__v": 0
}
```

### 2. Get Hive Log  
**GET** `/api/hives`

**Response body:**

```json
{
    "data": [
        {
            "_id": "683acb13345deb193c031dbe",
            "hiveId": "HIVE009",
            "datePlaced": "2025-04-08T00:00:00.000Z",
            "latitude": 77,
            "longitude": 77.1025,
            "numColonies": 5,
            "createdAt": "2025-05-31T09:25:39.743Z",
            "__v": 0
        },
        {
            "_id": "683acb18345deb193c031dc1",
            "hiveId": "HIVE0010",
            "datePlaced": "2025-04-08T00:00:00.000Z",
            "latitude": 77,
            "longitude": 77.1025,
            "numColonies": 5,
            "createdAt": "2025-05-31T09:25:44.445Z",
            "__v": 0
        },
        {
            "_id": "683acb02345deb193c031db2",
            "hiveId": "HIVE005",
            "datePlaced": "2025-04-08T00:00:00.000Z",
            "latitude": 77,
            "longitude": 77.1025,
            "numColonies": 5,
            "createdAt": "2025-05-31T09:25:22.019Z",
            "__v": 0
        },
        {
            "_id": "683acb0f345deb193c031dbb",
            "hiveId": "HIVE008",
            "datePlaced": "2025-04-08T00:00:00.000Z",
            "latitude": 77,
            "longitude": 77.1025,
            "numColonies": 5,
            "createdAt": "2025-05-31T09:25:35.618Z",
            "__v": 0
        },
        {
            "_id": "683acb07345deb193c031db5",
            "hiveId": "HIVE006",
            "datePlaced": "2025-04-08T00:00:00.000Z",
            "latitude": 77,
            "longitude": 77.1025,
            "numColonies": 5,
            "createdAt": "2025-05-31T09:25:27.848Z",
            "__v": 0
        },
        {
            "_id": "683acafd345deb193c031daf",
            "hiveId": "HIVE003",
            "datePlaced": "2025-04-08T00:00:00.000Z",
            "latitude": 77,
            "longitude": 77.1025,
            "numColonies": 5,
            "createdAt": "2025-05-31T09:25:17.557Z",
            "__v": 0
        },
        {
            "_id": "683acaf2345deb193c031da9",
            "hiveId": "HIVE001",
            "datePlaced": "2025-04-08T00:00:00.000Z",
            "latitude": 77,
            "longitude": 77.1025,
            "numColonies": 5,
            "createdAt": "2025-05-31T09:25:06.382Z",
            "__v": 0
        },
        {
            "_id": "683ac8660b3014a20c0e03ec",
            "hiveId": "HIVE004",
            "datePlaced": "2025-04-08T00:00:00.000Z",
            "latitude": 28.7041,
            "longitude": 77.1025,
            "numColonies": 5,
            "createdAt": "2025-05-31T09:14:14.914Z",
            "__v": 0
        },
        {
            "_id": "683acaf9345deb193c031dac",
            "hiveId": "HIVE002",
            "datePlaced": "2025-04-08T00:00:00.000Z",
            "latitude": 77,
            "longitude": 77.1025,
            "numColonies": 5,
            "createdAt": "2025-05-31T09:25:13.467Z",
            "__v": 0
        },
        {
            "_id": "683acb0c345deb193c031db8",
            "hiveId": "HIVE007",
            "datePlaced": "2025-04-08T00:00:00.000Z",
            "latitude": 77,
            "longitude": 77.1025,
            "numColonies": 5,
            "createdAt": "2025-05-31T09:25:32.071Z",
            "__v": 0
        }
    ],
    "pagination": {
        "total": 12,
        "page": 1,
        "limit": 10,
        "totalPages": 2
    }
}
```

### 3. Add Crop Calendar Entry
**POST** `/api/crops`

**Request body:**

```json
{
  "name": "Sunflower",
  "floweringStart": "2025-04-10",
  "floweringEnd": "2025-04-25",
  "latitude": 76.9124,
  "longitude": 75.7873,
  "recommendedHiveDensity": 5
}
```
**Response body:**

```json
{
    "name": "Sunflower",
    "floweringStart": "2025-04-10T00:00:00.000Z",
    "floweringEnd": "2025-04-25T00:00:00.000Z",
    "latitude": 76.9124,
    "longitude": 75.7873,
    "location": {
        "type": "Point",
        "coordinates": [
            75.7873,
            76.9124
        ]
    },
    "recommendedHiveDensity": 5,
    "_id": "683aea0661311deb39d70a60",
    "createdAt": "2025-05-31T11:37:42.835Z",
    "__v": 0
}
```

### 4. Nearby Crop Opportunities API
**GET** `/api/crops/nearby`

**Response body:**

```json
[
    {
        "location": {
            "type": "Point",
            "coordinates": [
                75.7873,
                26.9124
            ]
        },
        "_id": "683ad4a4e688e994e64ee469",
        "name": "Sunflower",
        "floweringStart": "2025-04-10T00:00:00.000Z",
        "floweringEnd": "2025-04-25T00:00:00.000Z",
        "latitude": 26.9124,
        "longitude": 75.7873,
        "recommendedHiveDensity": 5,
        "createdAt": "2025-05-31T10:06:28.766Z",
        "__v": 0
    }
]
```

### 5. Export logs as CSV
**GET** `/api/hives/export`

**Response body:**

```
"hiveId","datePlaced","latitude","longitude","numColonies","createdAt"
"HIVE004","2025-04-08T00:00:00.000Z",28.7041,77.1025,5,"2025-05-31T09:14:14.914Z"
"HIVE001","2025-04-08T00:00:00.000Z",77,77.1025,5,"2025-05-31T09:25:06.382Z"
"HIVE002","2025-04-08T00:00:00.000Z",77,77.1025,5,"2025-05-31T09:25:13.467Z"
"HIVE003","2025-04-08T00:00:00.000Z",77,77.1025,5,"2025-05-31T09:25:17.557Z"
"HIVE005","2025-04-08T00:00:00.000Z",77,77.1025,5,"2025-05-31T09:25:22.019Z"
"HIVE006","2025-04-08T00:00:00.000Z",77,77.1025,5,"2025-05-31T09:25:27.848Z"
"HIVE007","2025-04-08T00:00:00.000Z",77,77.1025,5,"2025-05-31T09:25:32.071Z"
"HIVE008","2025-04-08T00:00:00.000Z",77,77.1025,5,"2025-05-31T09:25:35.618Z"
"HIVE009","2025-04-08T00:00:00.000Z",77,77.1025,5,"2025-05-31T09:25:39.743Z"
"HIVE0010","2025-04-08T00:00:00.000Z",77,77.1025,5,"2025-05-31T09:25:44.445Z"
"HIVE0011","2025-04-08T00:00:00.000Z",77,77.1025,5,"2025-05-31T09:25:48.721Z"
"HIVE0012","2025-04-08T00:00:00.000Z",77,77.1025,5,"2025-05-31T09:25:52.673Z"

```
[hive_logs.csv](https://github.com/user-attachments/files/20533377/hive_logs.csv)
