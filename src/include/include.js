const endpoint = 'http://www.scrummable.com/wp-json/wp/v2/posts?_embed'

const getPost = (post) => {
	return `
		<article class="card">
			<h2>${post.title.rendered}</h2>
			<p>${post.excerpt.rendered}</p>
		</article>
	`
}

axios.get(endpoint).then((response) => {

	response.data.forEach((post) => {
		document.querySelector('main').innerHTML += getPost(post)
	})

	console.log(response.data)
}).catch((error) => {
	console.error(error)
})
