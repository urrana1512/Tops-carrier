const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3036;

app.use(express.static(path.join(__dirname, 'public')));

const inputPath = path.join(__dirname, 'largeFile.txt');
const outputPath = path.join(__dirname, 'outputStream.txt');

// Step 1: Create a large text file with repetitive content
const generateLargeFile = () => {
    const stream = fs.createWriteStream(inputPath);
    for (let i = 0; i < 5000; i++) {
        stream.write(`${i}: [STREAM_DATA_SEGMENT] - Node.js File System Mastery - Udit Rana MERN Developer\n`);
    }
    stream.end();
    console.log("🛠️ 'largeFile.txt' generated for stream testing.");
};

generateLargeFile();

// Task 22.16: Using Streams to Read and Write Files
app.post('/api/process-stream', (req, res) => {
    let chunkCount = 0;
    let totalSize = 0;

    // Requirement: Use fs.createReadStream to read the file in chunks
    const readStream = fs.createReadStream(inputPath, { highWaterMark: 16 * 1024 }); // 16KB chunks
    
    // Requirement: Use fs.createWriteStream to create outputStream.txt
    const writeStream = fs.createWriteStream(outputPath);

    console.log("\n--- [STREAM_TRANSFER_START] ---");

    readStream.on('data', (chunk) => {
        chunkCount++;
        totalSize += chunk.length;
        // Requirement: Log each chunk to the console
        console.log(`📦 Chunk Received: ${chunkCount} | Size: ${chunk.length} bytes`);
        
        // Write each chunk to the output stream
        writeStream.write(chunk);
    });

    readStream.on('end', () => {
        writeStream.end();
        console.log(`✅ [STREAM_TRANSFER_COMPLETE]`);
        console.log(`Total Chunks: ${chunkCount} | Total Volume: ${totalSize} bytes`);
        console.log("---------------------------------\n");

        res.json({ 
            success: true, 
            chunks: chunkCount, 
            size: totalSize,
            message: 'Stream pipeline finalized successfully.' 
        });
    });

    readStream.on('error', (err) => {
        console.error("Stream Error:", err);
        res.status(500).json({ success: false, error: err.message });
    });
});

app.listen(PORT, () => {
    console.log(`\n🌊 Task 22.16 Stream Processor running at http://localhost:${PORT}`);
    console.log(`Standing by for data pipelines...\n`);
});
