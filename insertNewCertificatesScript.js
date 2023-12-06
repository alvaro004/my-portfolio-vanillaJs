function insertCertificate(elementId, certificateName, certificateLink) {
    // Find the 'ol' element by ID
    const ol = document.getElementById(elementId);
    if (!ol) {
        console.error('Ordered list not found.');
        return;
    }

    // Create the new 'li' element
    const li = document.createElement('li');
    li.className = 'timeline-item';

    // Create the 'h4' element
    const h4 = document.createElement('h4');
    h4.className = 'h4 timeline-item-title certificate-title';
    h4.textContent = certificateName;

    // Create the 'div' and nested elements
    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'title-wrapper title-pointer';

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'button icon-box icon-box1 icon-box2';

    const link = document.createElement('a');
    link.href = certificateLink;
    link.target = '_blank';
    link.textContent = 'show credentials';

    const img = document.createElement('img');
    img.src = './assets/images/new-window-icon.svg';
    img.alt = 'design icon';
    img.width = 10;

    // Assemble the elements
    buttonDiv.appendChild(link);
    buttonDiv.appendChild(img);
    titleWrapper.appendChild(buttonDiv);
    li.appendChild(h4);
    li.appendChild(titleWrapper);

    // Insert the new 'li' at the top of the 'ol'
    ol.insertBefore(li, ol.firstChild);
}

// Example usage
insertCertificate('other-certificates', 'Alvaro', './assets/certificates/CertificateOfCompletion_Python Automation and Testing.pdf');

// Exporting the function
export { insertCertificate };
