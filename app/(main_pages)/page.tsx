import Image from "next/image"
import {
    S3Client,
    PutObjectCommand,
    CreateBucketCommand,
    DeleteObjectCommand,
    DeleteBucketCommand,
    paginateListObjectsV2,
    GetObjectCommand,
} from "@aws-sdk/client-s3"
   


export default async function Main() {

    // const s3Client = new S3Client({
    //     region: 'us-west-1', 
    //     credentials: {
    //         accessKeyId: process.env.AWS_ACCES_KEY_ID, 
    //         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    //     } 
    // })

    // const s3Send = await s3Client.send(
    //     new PutObjectCommand({
    //     Bucket: 'tonymx-tailwind-to-css',
    //     Key: "css-compiled-files/my-first-object2.txt",
    //     Body: "Hello JavaScript SDK!",
    //     })
    // )
    
    // const s3Send = await s3Client.send(
    //     new DeleteObjectCommand({
    //     Bucket: 'tonymx-tailwind-to-css',
    //     Key: "my-first-object.txt"
    //     })
    // )
    // console.log('RESPUESTA ELIMINAR?...', s3Send)
    
    return (
        <div>
            <div className="py-3">
                <div className="mx-auto px-5 text-gray-500">
                {" "}
                {/* max-w-6xl */}
                <div className="relative">
                    <div className="relative z-10 grid gap-3 grid-cols-6">
                    <div className="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200"></div>
                    <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                        <div></div>
                    </div>
                    <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                        <div></div>
                    </div>
                    <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                        <div className="grid sm:grid-cols-2"></div>
                    </div>
                    <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                        <div className="h-full grid sm:grid-cols-2">
                        <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6"></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
