 data= Post.create(
    
   [
    {
    
      Title: "Monitor Azure Managed Instance for Apache Cassandra using Dynatrace",
      Content: "There is now a new extension from Dynatrace that provides fully app-centric Cassandra performance monitoring for Azure Managed Instance for Apache Cassandra. Monitor your clusters with Dynatrace Prometheus Extension Dynatrace Prometheus Extension allows you to monitor and analyze the activity of your Azure Managed Instance for Apache ",
      Author: "Jay Smith"
    
    },
    {
    
      Title: "Application permissions for Bookings APIs in Microsoft Graph now available on v1",
      Content: "We are delighted to announce that application permissions for Bookings APIs in Microsoft Graph are now available on the v1 endpoint.  Microsoft Graph APIs support both delegated and application permissions on the v1 endpoint. Previously, Bookings APIs in Microsoft Graph supported only delegated permissions.",
      Author: "Bridgit Makena"
      
    },
    {
    
      Title: "Use of refine framework to develop full stack application",
      Content: "We frequently require quick development and sometimes flexibility while developing a Full Stack application. Aside from speed and flexibility, we must establish the application architecture correctly at the start so that we are not subjected to any more needless work throughout the development process. In this article, we will use the refine framework to develop a full stack application. Refine will provide us with the speed and flexibility we are looking for, while assisting with the overall project architecture during web application development.",
      Author: "Judy Mwai"
      
    },
    {
    
      Title: "What is refine",
      Content: "refine is a headless React internal tool framework. It helps you develop quickly while developing both B2B and B2C applications. While speeding you up, it is never restricted and has a fully customizable structure.",
      Author: "Kayleigh Rush"
     
    },
    {
      Title: "Time is limited",
      Content: "noting the is and ts",
      Author: "Wangila"
    
    }
  
    
  ]

)
data.map do |d|
  rand(2..4).times do
    Review.create(
      name: Faker::Name.first_name,
      comment:Faker::Lorem.sentence(word_count: rand(10..20)),
      post_id: d.id

    )
  end
end



