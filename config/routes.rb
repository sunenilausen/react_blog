Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
      resources :articles
      resources :categories
    end
  end
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  # devise_for :users
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
