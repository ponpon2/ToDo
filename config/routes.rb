Rails.application.routes.draw do
  resources :todoes

  root "todoes#index"
end
