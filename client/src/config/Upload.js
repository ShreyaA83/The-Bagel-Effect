import Moralis from 'moralis';
import fs from 'fs';

async function uploadToIpfs(){

    await Moralis.start({
        apiKey:"OhFm5zddHFikaKlccDMCIkoJ6XGfH1VDF9aSHI63RI77ZMZlL74JnPruxiw0PvwW"
    });

    const uploadArray=[
        {
            path:"canvas.png",
            content: fs.readFileSync('./canvas.png',{encoding:'base64'})
        },
        {  path:"canvas.png",
           content:""
        },
    ];

    const response = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: uploadArray,
    })

    console.log(response);

}


uploadToIpfs();