Rails.application.routes.draw do

  devise_for :users
  get 'welcom/index'

  resources :articles do
  	resources :comments
  end

  root 'welcom#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
