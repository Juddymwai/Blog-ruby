class ApplicationController < Sinatra::Base

    get '/posts' do
        post = Post.all
        post.to_json(include: :reviews)
    end
