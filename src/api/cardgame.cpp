#include <iostream>
#include <vector>
#define ll long long
using namespace std;

int main() {
	int t;
	cin>>t;
	while(t--){
	    int n;cin>>n;
	    vector<ll>arr;
	    for(int i = 0;i<n;i++){
	        ll a;
	        cin>>a;
	        arr.push_back(a);
	    }
	    
	    ll max = 0;
	    ll temp_max = 0;
	    for(int i = 0;i<n;i++){
	        temp_max+=arr[i];
	        
	        if(temp_max<0){
	            temp_max = 0;
	        }
	        if(temp_max>max){
	            max = temp_max;
	        }
	    }
	        cout<<max<<endl;
	}
	return 0;
}
