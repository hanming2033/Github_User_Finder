class Github{
  constructor(){
    this.client_id = '1d2d2d9246d36b7a1681';
    this.client_secret = '5dab128fea206732f826d862b2252e69487fb721';
    this.repos_count = 6;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const resProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await resProfile.json();
    const resRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repos = await resRepos.json();
    return {
      profile,
      repos
    }
  }
}