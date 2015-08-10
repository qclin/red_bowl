json.array!(@entries) do |entry|
  json.extract! entry, :id, :photo, :tag, :user_id, :contest_id
  json.url entry_url(entry, format: :json)
end
