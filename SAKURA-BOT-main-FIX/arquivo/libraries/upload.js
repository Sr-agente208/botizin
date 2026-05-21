const { downloadContentFromMessage } = require('baileys');
const FormData = require('form-data');
const axios = require('axios');

async function upload(imageMessage) {
if (!imageMessage) return { success: false, error: 'Nenhuma imagem marcada.' };

try {  
    // Baixando o conteúdo da imagem  
    const stream = await downloadContentFromMessage(imageMessage, 'image');  
    const chunks = [];  
    for await (const chunk of stream) {  
        chunks.push(chunk);  
    }  
    const buffer = Buffer.concat(chunks);  

    // Preparando o FormData  
    const form = new FormData();  
    form.append('image', buffer, {  
        filename: `img_${Date.now()}.jpg`  
    });  

    // API do imgbb  
    const apiKey = '90a03ed750b398bc191aaa4aa0ba6a75';  
    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, form, {  
        headers: form.getHeaders()  
    });  

    // Retornando a URL  
    return { success: true, url: res.data.data.url };  
} catch (err) {  
    console.error('Erro no upload:', err);  
    return { success: false, error: 'Erro ao gerar link da imagem.' };  
}

}

module.exports = { upload };
