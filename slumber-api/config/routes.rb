Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :hosts
      resources :orders
      resources :beds
    end
  end
end
