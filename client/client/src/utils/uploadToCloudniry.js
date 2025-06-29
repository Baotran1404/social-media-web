const cloud_name = "dk8rotpmz";
const upload_preset = "tran-social"


export const uploadToCloudinary = async(pics, fileType)=>{

    if(pics && fileType ){
        const data = new FormData();
        data.append ("file", pics);
        data.append("upload_preset", upload_preset);


        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`,
      {method:"post" , body:data}
        );



        const fileData = await res.json();
         console.log("res------", fileData);
        return fileData.url;

    }else {
        console.log("error ....");
    }
};