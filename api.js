document.getElementById("searchButton").addEventListener("click", function() {
    const domain = document.getElementById("domainInput").value;
    fetchDomainData(domain);
  });
  
  async function fetchDomainData(domain) {
    const url = `https://api.domainsdb.info/v1/domains/search?domain=${domain}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      
      displayResults(data.domains);
    } catch (error) {
      console.error(error);
      document.getElementById("results").textContent = "An error occurred. Please try again.";
    }
  }
  
  function displayResults(domains) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";  // Clear previous results
    
    if (domains && domains.length > 0) {
      domains.forEach(domain => {
        const domainInfo = document.createElement("div");
        domainInfo.textContent = `Domain: ${domain.domain} | Country: ${domain.country}`;
        resultsContainer.appendChild(domainInfo);
      });
    } else {
      resultsContainer.textContent = "No results found.";
    }
  }