const UseCustomTooltip = () => {
	function productExternalTooltip(context, data) {
		// Tooltip Element
		let tooltipEl = document.getElementById('chartjs-tooltip');

		// Create element on first render
		if (!tooltipEl) {
			tooltipEl = document.createElement('div');
			tooltipEl.id = 'chartjs-tooltip';
			tooltipEl.innerHTML = '<section></section>';
			document.body.appendChild(tooltipEl);
		}

		// Hide if no tooltip
		const tooltipModel = context.tooltip;
		if (tooltipModel.opacity === 0) {
			tooltipEl.style.opacity = '0';
			return;
		}

		// Set caret Position
		tooltipEl.classList.remove('above', 'below', 'no-transform');
		if (tooltipModel.yAlign) {
			tooltipEl.classList.add(tooltipModel.yAlign);
		} else {
			tooltipEl.classList.add('no-transform');
		}

		// Set Text
		if (tooltipModel.body) {
			const titleLines = tooltipModel.title[0] || [];
			const searchedData = data.filter((dx) => dx.title === titleLines)[0];
			let innerHTML = `<div style="display:flex; flex-direction:column; gap: 10px;">`;

			for (let objt in searchedData) {
				if (['stock', 'price', 'brand'].includes(objt)) {
					innerHTML += `<div class='row' style="display: flex; gap: 10px; background-color: rgb(241 245 249); padding:10px; border-radius:10px; justify-content: space-between; min-width:200px">
          <div class='row-title' style="font-size:13px; text-transform: capitalize;">${objt}</div>
          <div class='row-body' style="font-size:13px;">${searchedData[objt]}</div>
        </div>`;
				}
			}

			innerHTML += `</div>`;

			let sectionEl = tooltipEl.querySelector('section');
			sectionEl!.style.backgroundColor = '#FFF';
			sectionEl!.innerHTML = innerHTML;
		}

		const position = context.chart.canvas.getBoundingClientRect();
		tooltipEl.style.backgroundColor = '#fff';
		tooltipEl!.style.padding = '10px';
		tooltipEl!.style.borderRadius = '10px';
		tooltipEl.style.opacity = '1';
		tooltipEl.style.position = 'absolute';
		tooltipEl.style.left = position.left + tooltipModel.caretX + 'px';
		tooltipEl.style.top = position.top + tooltipModel.caretY + 'px';
		tooltipEl.style.pointerEvents = 'none';
	}

	return { productExternalTooltip };
};

export default UseCustomTooltip;
