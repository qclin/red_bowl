json.array!(@contests) do |contest|
  json.extract! contest, :id, :category, :deadline
  json.url contest_url(contest, format: :json)
end
