module.exports = ({ env }) => ({
  "vercel-deploy":{
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_X6HoewgCPnV5TPofA6M8j6vnmGKD/Rvxn0hCSOA",
      apiToken: "https://api.vercel.com/v1/integrations/deploy/prj_X6HoewgCPnV5TPofA6M8j6vnmGKD/Rvxn0hCSOA",
      appFilter: "strapi-unscripted",
      // teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});