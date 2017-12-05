'use strict';

import React, { PureComponent, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	ListView,
	RefreshControl,
	Text
} from 'react-native';

import { observer } from 'mobx-react/native';
import PageList from '../store/pageList';

@observer
export default class List extends PureComponent {

	static propTypes = {
		refreshableColors: PropTypes.array,
		refreshableProgressBackgroundColor: PropTypes.string,
		refreshableSize: PropTypes.string,
		refreshableTintColor: PropTypes.string,
		refreshableTitle: PropTypes.string,
		refreshableTitleColor: PropTypes.string,
		removeClippedSubviews: PropTypes.bool
	};
	
	static defaultProps = {
		refreshableColors: undefined,
		refreshableProgressBackgroundColor: undefined,
		refreshableSize: undefined,
		refreshableTintColor: "red",
		refreshableTitle: "正在刷新",
		refreshableTitleColor: "white",
		removeClippedSubviews: true
	};

	constructor(props) {
		super(props);

		this._dataSource = new ListView.DataSource({ rowHasChanged: (v1, v2) => v1 !== v2 });
		this._pageList = new PageList();
		this._renderRow = this.renderRow.bind(this);
	}

	render() {
		const {
			refreshableColors,
			refreshableProgressBackgroundColor,
			refreshableSize,
			refreshableTintColor,
			refreshableTitle,
			refreshableTitleColor,
			removeClippedSubviews
		} = this.props;
		return (
			<ListView
				enableEmptySections
				dataSource={ this._dataSource.cloneWithRows(this._pageList.data.slice(0)) }
				renderRow={ this._renderRow }
				onEndReached={ this._pageList.fetchMore }
				style={ styles.container }
				keyboardDismissMode={ 'on-drag' }
				pageSize={ 10 }
				onEndReachedThreshold={ 5 }
				removeClippedSubviews={ removeClippedSubviews }
				refreshControl={
					<RefreshControl
						onRefresh={ this._pageList.refresh }
						refreshing={ this._pageList.isRefreshing }
						colors={refreshableColors}
						progressBackgroundColor={refreshableProgressBackgroundColor}
						size={refreshableSize}
						tintColor={refreshableTintColor}
						title={refreshableTitle}
						titleColor={refreshableTitleColor}
					/>
				}
			/>
		);
	}

	renderRow(row) {
		return (
			<View style={styles.item}>
				<Text style={{}}>
					{ row }
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	item: {
		height: 40,
		alignSelf: 'center'
	}
});